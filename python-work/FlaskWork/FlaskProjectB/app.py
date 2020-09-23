"""
This is my main flask application for this project. When it is done, it will
be a CRUD application, like the ones that I have made before, but with a UI
that a user can use to interact with the program instead of having to use other
applications like Postman or Python requests to collect and modify data on a
database. It will use SQLite as the database backend where it will be working
with user data. However, a user can only have access to the data with an
authorization token that gets generated when they login. They will also be
able to register as well on this application.
"""
from flask import Flask, request, render_template, jsonify
#import sqlite3
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from datetime import timedelta
from app_security import authenticate, identity
#initialize the application
app = Flask(__name__)
api = Api(app) #allows us to make API resources
app.secret_key = "EbubeAso"
jwt = JWT(app, authenticate, identity)
#config the JWT token to expire at a later time (in seconds)
#this is also why I imported timedelta from datetime
app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=1200)