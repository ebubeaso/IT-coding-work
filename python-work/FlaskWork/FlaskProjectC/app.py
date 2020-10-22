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
class CurrentNotes(Resource):
    def get(self):
        notes = TheNotes.query.order_by(TheNotes.date).all()
        result = [data.jsonize() for data in notes]
        return result, 200

# *** End of code for Postman/Python requests ***


# *** Code for the web user interface ***

# *** End of code for web user interface ***

# API resources
api.add_resource(CurrentNotes, '/notes')
if __name__ == "__main__":
    app.run()