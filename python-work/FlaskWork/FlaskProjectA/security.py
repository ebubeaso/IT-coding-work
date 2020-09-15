"""This Python file has been made to work with authenticating a user to use
the Flask API. It makes a class known as User, which has an id, username, and
password. These are the credentials. Then, it will use some functions like 
authenticate and identify to work with the user credentials. This Flask project
will then use the user credetials for making JSON web tokens for authentication
and authorization to make more secure APIs. It will be have the usernames and
passwords in a database known as Users.db and then it uses class methods to 
authenticate and identify the user"""

import sqlite3
#for comparing strings
from werkzeug.security import safe_str_cmp

#The class that makes the users
class User:
    def __init__(self, _id, user, passwd):
        self.id = _id
        self.username = user
        self.password = passwd
    
    #making class methods that will see if the username and password are
    #in the Users.db database
    @classmethod
    def find_username(cls, username):
        #connect to database
        conn = sqlite3.connect('Users.db')
        cur = conn.cursor()
        #fetch the user data for authentication
        sql = "select * from userinfo where username=?"
        cur.execute(sql, (username,))
        row = cur.fetchone()
        #if there is data about the user
        if row:
            user = cls(*row)
        else:
            user = None
        conn.close()
        return user 
    
    #does the same thing as find_username but for the id
    @classmethod
    def find_id(cls, _id):
        conn = sqlite3.connect('Users.db')
        cur = conn.cursor()
        sql = "select * from userinfo where id=?"
        cur.execute(sql, (_id,))
        row = cur.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None
        conn.close()
        return user 

#authenticate function for JWT
def authenticate(username, password):
    user = User.find_username(username)
    if user and safe_str_cmp(user.password, password):
        return user

"""identity function for JWT (takes in payload, or JWT token and it extracts
the user ID from the payload, and then retrieves the user with that matching
payload)"""
def identity(payload):
    userID = payload['identity']
    return User.find_id(userID)