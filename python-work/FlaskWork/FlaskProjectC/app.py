#! /usr/bin/env python

"""This is the main Flask API application which will manage the backend of my
notes app. The purpose of this API application is to get pretty comfortable with
using Flask to securely make web applications. Here are its components:
    - It will use Flask RESTful for making REST APIs, and SQLAlchemy to make
    the queries more Pythonic to work with
    - It will also use Flask-JWT-extended to make access and refresh tokens
    - It will use the HTML files in templates folder and the CSS and JS files in
    the static folder for a user interface
    - The user will be able to interact with this notes app through either an
    API tool like Postman/Python Requests or from the Web UI
    - It will allow the user to login and even register in order to use the 
    notes app (cannot use it unless logged in, it will check too by using 
    Flask sessions!)
    - It will use a self-signed certificate as practice encrypting data
    in-transit, and as practice for using SSL certificates"""
from flask import (Flask, jsonify, request, render_template, session, url_for,
make_response)
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt_identity, 
create_refresh_token, jwt_required, jwt_refresh_token_required)
from werkzeug.security import safe_str_cmp
from datetime import timedelta
#from user import SavedUser, NewUser
import random

#Initialize everything
app = Flask(__name__)
api = Api(app)
app.secret_key = "EbubeAsoYoungITPro2020!!"
jwt = JWTManager(app)

# Configurations and connecting to databases
app.config["JWT_EXPIRATION_DELTA"] = timedelta(seconds=1000)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Notes.db"
app.config["SQLALCHEMY_BINDS"] = {"users": "sqlite:///TheUsers.db"}
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# ** Start of User models **

class User(db.Model):
    __bind_key__ = 'users'
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)

    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password
    
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }
    
    #class methods for handling the usernames and passwords
    @classmethod
    def find_username(cls, username):
        the_query = cls.query.filter_by(username=username).first()
        return the_query
    
    @classmethod
    def find_by_id(cls, _id):
        the_query = cls.query.filter_by(id=_id).first()
        return the_query

# ** End of User models **

# making the Notes model
class TheNotes(db.Model):
    __tablename__ = 'Notes'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    name = db.Column(db.Text)
    note = db.Column(db.Text)

    def __init__(self, _id, date, name, note):
        self.id = _id
        self.date = date
        self.name = name
        self.note = note

    def jsonize(self):
        return {
            'id': self.id,
            'date': [self.date.strftime('%Y-%m-%d'), 
                    self.date.strftime('%H-%M-%S')],
            'name': self.name,
            'note': self.note
        }

# the Home API Route:
@app.route('/')
def index():
    return render_template("index.html")

# *** Routes through Postman/Python requests ***
class SignIn(Resource):
    def post(self):
        #Check if user is in the database
        check_query = User.find_username(request.json['username'])
        #check for the password
        if check_query and safe_str_cmp(check_query.password, request.json['password']):
            tokens = {
                'Message': 'Login Successful! Here are your tokens!',
                'Access Token': create_access_token(
                                identity=check_query.id, fresh=True),
                'Refresh Token': create_refresh_token(identity=check_query.id)
            }
            return tokens, 200
        else:
            return {'Message': 'Invalid credentials, try again!'}, 400
class CurrentNotes(Resource):
    def get(self):
        notes = TheNotes.query.order_by(TheNotes.date).all()
        result = [data.jsonize() for data in notes]
        return result, 200

# *** End of code for Postman/Python requests ***


# *** Code for the web user interface ***

# For loggining, logging out and registering
class Login(Resource):
    def get(self):
        pass
    def post(self):
        pass

class Logout(Resource):
    def get(self):
        pass

class Register(Resource):
    def get(self):
        pass
    def post(self):
        username_exists = User.find_username(request.form['username'])
        if username_exists:
            return {'Message': 'Sorry, that user exists already!'}, 400
        pass

# *** End of code for web user interface ***


# API resources
api.add_resource(CurrentNotes, '/notes')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Register, '/signup')
#route used for signing in via Requests or Postman
api.add_resource(SignIn, '/signin')
if __name__ == "__main__":
    app.run()