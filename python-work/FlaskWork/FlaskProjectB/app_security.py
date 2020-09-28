""" Look at uncommented code below. Using JWT extended instead """

# """
# This part of the python program will have a user data class that called User.
# This will have user data saved in the UserData.db SQLite database for
# authentication purposes. It will find the username and the id of the user so 
# that it can make a JWT authorization token for the logged in user to use the APIs
# in this flask application
# """
# from werkzeug.security import safe_str_cmp
# #this is importing from the user.py file
# from user import User

# """
# Takes in a username and password. This is used to authenticate the user
# and it will see if the credentials are correct from the query
# """
# def authenticate(username, password):
#     user = User.find_username(username)
#     if user and safe_str_cmp(user.password, password):
#         return user
#     else:
#         return "Authentication credentials invalid"
# """
# Takes in a payload, which is the contents of the JWT token, and extracts
# the user id from the payload, and then mapping it to the correct user
# """
# def identity(payload):
#     user_ID = payload['identity']
#     return User.find_by_id(user_ID)
from flask import Flask, request, render_template, redirect, url_for
from flask_restful import Resource
from werkzeug.security import safe_str_cmp
from flask_jwt_extended import create_access_token, create_refresh_token
from user import User

class UserLogin(Resource):
    def get(self):
        return render_template('login.html')
    def post(self):
        #get the form data
        data = request.form
        #find the users in that database
        the_user = User.find_username(request.form['username'])
        #authentication goes here
        if the_user and safe_str_cmp(the_user.password, data['password']):
            access_token = create_access_token(identity=the_user.id, fresh=True)
            refresh_token = create_refresh_token(the_user.id)
            return {
                'access_token': access_token,
                'refresh_token': refresh_token
            }, 200
        else:
            return {"Message": "Invalid credentials"}, 401
    

