
"""
This part of the python program will have a user data class that called User.
This will have user data saved in the UserData.db SQLite database for
authentication purposes. It will find the username and the id of the user so 
that it can make a JWT authorization token for the logged in user to use the APIs
in this flask application
"""
from werkzeug.security import safe_str_cmp
#this is importing from the user.py file
from user import User

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