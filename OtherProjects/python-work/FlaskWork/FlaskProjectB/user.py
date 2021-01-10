"""This is a separate file to handle the users"""
import sqlite3
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