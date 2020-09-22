"""
This part of the python program will have a user data class that called User.
This will have user data saved in the UserData.db SQLite database for
authentication purposes. It will find the username and the id of the user so 
that it can make an authorization token for the logged in user to use the APIs
in this flask application
"""
import sqlite3
from functools import wraps
import random
from werkzeug.security import safe_str_cmp