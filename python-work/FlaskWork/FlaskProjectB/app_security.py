
"""
This part of the python program will have a user data class that called User.
This will have user data saved in the UserData.db SQLite database for
authentication purposes. It will find the username and the id of the user so 
that it can make a JWT authorization token for the logged in user to use the APIs
in this flask application
"""
import sqlite3
from werkzeug.security import safe_str_cmp

class User:
    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password

    #meant to find the username of the user for authentication
    @classmethod
    def find_username(cls, username):
        conn = sqlite3.connect('UserData.db')
        cur = conn.cursor()
        sql = "select * from Users where username=?"
        cur.execute(sql, (username,))
        row = cur.fetchone()
        #check if row has any data from the query
        if row:
        #a tuple that uses its elements as arguments for the User object
            user = cls(*row)
        else:
            user = None
        conn.close()
        return user

    @classmethod
    def find_by_id(cls, _id):
        conn = sqlite3.connect('UserData.db')
        with conn:
            cur = conn.cursor()
            sql = "select * from Users where id=?"
            cur.execute(sql, (_id,))
            row = cur.fetchone()
            if row:
                user = cls(*row) #uses the row tuple as arguments for User object
            else:
                user = None
        return user
"""
Takes in a username and password. This is used to authenticate the user
and it will see if the credentials are correct from the query
"""
def authenticate(username, password):
    user = User.find_username(username)
    if user and safe_str_cmp(user.password, password):
        return user
    else:
        return "Authentication credentials invalid"
"""
Takes in a payload, which is the contents of the JWT token, and extracts
the user id from the payload, and then mapping it to the correct user
"""
def identity(payload):
    user_ID = payload['identity']
    return User.find_by_id(user_ID)