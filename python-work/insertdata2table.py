#! usr/bin/env python
"""This script here is made to take data from a text file and add it to a
table made in MariaDB. It is a way for me to practice putting in data
automatically so that I do not have to manually insert data into MariaDB.
What it does is that it takes a .txt file and puts each line into a list, then
it connects to the database that I want to use and inserts the data from the
text file as values automatically.

Parameter d: the database to work with
Parameter t: the table to insert the data into
Parameter c: the columns for the table
Parameter v: the values for the table"""

import pymysql
def insertdata(d, t, c, v):
	#read the text file and put the data into a new list
	"""with open('./'+f, 'r') as file:
		content = file.readlines()
	valuelist = []
	for i in content:
		valuelist.append(i[:-1])"""
	#connect to the database
	hostIP = input('Enter the IP address of the DB host: ')
	username = input('Enter the username: ')
	passwd = input('Enter MariaDB password: ')
	mydb = pymysql.connect(host=hostIP,
        user=username,
        password=passwd,
        db=d,
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor)

	cursor = mydb.cursor()
	#insert the data from the valuelist to the DB table
	# (uses a for loop to do the process automatically)
	sqlQuery = """insert into %s (%s) values (%s)""" \
		%(t, c, v);
	cursor.execute(sqlQuery)
	mydb.commit()
	print(' ')
	print('Data has been successfully added to the table '+t)
	print(' ')

if __name__ == "__main__":
	database = input('Enter in the database name: ')
	the_table = input('Enter the table to insert the data into: ')
	columns = input('Enter in the columns of the table: ')
	values = input('Enter in the database values: ')
	insertdata(database, the_table, columns, values)
