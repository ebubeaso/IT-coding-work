#! /usr/bin/env python

"""
This Python script is simply made to allow me to quickly query general server info on the sandbox 
environments that I have setup in my lab. It could also be used to query other databases as well. 
I may use this in the future for querying my MariaDB databases more efficiently. I will simply 
use the peewee library to take care of this. I will be strict typing my code so that I can keep 
track of the data types of the different variables I make within this script.

IMPORTANT: This script will only work if you are querying a MySQL or MariaDB database
"""
from pydantic import BaseModel
from getpass import getpass
from peewee import *
from pymysql import connect
# *************************************************************************************************
# *                             Function used to list the databases                               *
# *************************************************************************************************
def list_all_databases():
    """
    This function will be used to list all of your databases in your database server in case
    you did not specify what database you would like to take a look at. It is simply a helper
    that will help gain more visibility in what is currently running in the connected database.
    Here are the questions that this script will ask you for:
    - hostname of database
    - port that the database is listening on
    - 
    Here is an example of what this function will return (a tuple of tuples):
    [
        (6732564, 'Sirius', '["sirius.aso.net", "mariadb1.aso.net"]', '192.168.1.102', 
        '[33606, 1194, 22]', '["DNS", "VPN", "MariaDB", "dev work"]', '["VPN", "MariaDB"]')
    ]
    This data will then look like this:
    """
    hostname = input("Enter the hostname of the database: ")
    db_port = int( input("Enter in the port number that the database uses (enter 3306 for default port): ") )
    db_user=input("Enter the database username: ")
    db_password=getpass(prompt="Please enter the password of this DB user: ")
    print("Do you want to connect securely to your database over TLS?")
    print("(You would need to have TLS setup on DB server that you're connecting to)")
    use_ssl = input("Only enter yes if you know FOR SURE: ").upper()
    print(f"Connection using TLS encryption: {use_ssl}")
    if use_ssl == "YES":
        set_ssl = False
    else:
        set_ssl = True
    # Connect to the database
    db_client = connect(
        host=hostname,
        port=db_port,
        user=db_user,
        password=db_password,
        database=None,
        ssl={"enable_tls":True},
        ssl_verify_cert=False,
        ssl_verify_identity=False,
        ssl_disabled=set_ssl
    )
    # Create the cursor and query all the databases to connect to
    db_cursor = db_client.cursor()
    db_cursor.execute("SHOW DATABASES")
    output = db_cursor.fetchall() # fetch all the rows of the queried data
    # close the connection
    db_client.close()
    print("Here are all the databases running in your current DB server:")
    all_databases = [database[0] for database in output]
    print(all_databases)
    print("")
    print("Out of those databases, which one would you like to look at?")
    select_database = input("--> ")
    # update client with the database that the client selected
    db_client = connect(
        host=hostname,
        port=db_port,
        user=db_user,
        password=db_password,
        database=select_database,
        ssl={"enable_tls":True},
        ssl_verify_cert=False,
        ssl_verify_identity=False,
        ssl_disabled=set_ssl
    )
    # update the cursor to start a new connection
    db_cursor = db_client.cursor()
    db_cursor.execute("SHOW TABLES")
    output2 = [table[0] for table in db_cursor.fetchall()] # fetch all the rows of the queried data
    print(f"Here are the tables that are a part of the database {select_database}:")
    print(output2)
    print("Which of the tables would you like to view?")
    select_table = input("--> ")
    db_cursor.execute(f"SHOW COLUMNS FROM {select_table}")
    columns = [column[0] for column in db_cursor.fetchall()]
    db_cursor.execute(f"SELECT * FROM {select_table}")
    output3 = [table for table in db_cursor.fetchall()] # fetch all the rows of the queried
    # close the connection
    db_client.close()
    print("Here are the results of your query:")
    print("Here are your columns and their respecitve rows")
    print(columns)
    print(output3)       

# *************************************************************************************************
# *                             Setup my custom Python classes                                    *
# *************************************************************************************************
class DBUser:
    """
    This class will get you setup to connect to the desired database
    Here are the attributes that it will be given:
    - database hostname
    - database username
    - database password
    - database port
    - TLS encryption (either on or off)
    - give inital database list and ask them what database that they would like to look at
    """
    def __init__(self, host:str, user:str, passwd:str, port:int, ssl:bool, verify_ssl:bool, database=None):
        self.host: str = host
        self.user: str = user
        self.password: str = passwd
        self.port: int = port
        self.ssl: bool = ssl
        self.verify_ssl: bool = verify_ssl

# *************************************************************************************************
# *                                 Implement Business Logic                                      *
# *************************************************************************************************

# setup the function to implement based on user input
def query_sandbox_nodes():
    pass

if __name__ == "__main__":
    list_all_databases()