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
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt_identity, 
create_refresh_token, jwt_required, jwt_refresh_token_required)
from db import db
import random
from datetime import datetime, timedelta
from models.dbmodels import User, TheNotes, RecoveryPassword
from api_client_routes import SignIn, CurrentNotes, SpecificNotes, NotesByName
from web_ui_routes import Login, Logout, MyNotes, NoteActions, ChangePassword
from werkzeug.security import safe_str_cmp

#Initialize everything
app = Flask(__name__)
api = Api(app)
app.secret_key = "EbubeAsoYoungITPro2020!!"
jwt = JWTManager(app)

# Configurations and connecting to databases
app.config["JWT_EXPIRATION_DELTA"] = timedelta(seconds=1200)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Notes.db"
app.config["SQLALCHEMY_BINDS"] = {"users": "sqlite:///TheUsers.db"}
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# The header tag we will use for my Web UI routes
the_header = {'Content Type': 'text/html'}

# the Home API Route:
@app.route('/')
def index():
    if 'user' in session:
        return render_template("indexloggedin.html")
    else:
        return render_template("index.html")

# ** Registering (whether via web UI or through Postman/Python Requests or etc.) **

class Register(Resource):
    def get(self):
        return make_response(render_template('register.html'), 200, the_header)
    def post(self):
        """This is when you are registering using Postman or Python 
        Requests"""
        if request.json:
            username_exists = User.find_username(request.json['username'])
            if username_exists:
                return {'Message': 'Sorry, that user exists already!'}, 400
            else:
                #For getting the ID, get the total number of entries in users table
                users_table = [user.serialize() for user in User.query.all()]
                id_key = ''
                id_key += str(len(users_table)+1) #makes the new ID
                #make the new User object to add to user database
                new_user = User(id_key, request.json['username'], 
                                        request.json['password'])
                db.session.add(new_user)
                db.session.commit()
                return {"Status": "Success!", 
                            "Message": "You have registered!"}, 201

        # This is for when the user is registering on the web interface
        if request.form:
            username_exists = User.find_username(request.form['new-user'])
            if username_exists:
                output = "Sorry, the username that you used is already taken!"
                return make_response(render_template('registered.html',
                                    output=output),400, the_header)
            else:
                #For getting the ID, get the total number of entries in users table
                users_table = [user.serialize() for user in User.query.all()]
                id_key = ''
                id_key += str(len(users_table)+1) #makes the new ID
                #make the new User object to add to user database
                new_user = User(id_key, request.form['new-user'], 
                                        request.form['register-password'])
                output = str(random.randint(11111, 99999))
                recovery_code = RecoveryPassword(request.form['new-user'], output)
                db.session.add(new_user)
                db.session.commit()
                db.session.add(recovery_code)
                db.session.commit()
                return make_response(render_template('registered.html',
                                    output=output),200, the_header)

# ** This handles the backend of when you forget your password **
class Recovery(Resource):
    def get(self):
        return make_response(render_template('recoverpassword.html'), 200, the_header)
    def post(self):
        recovery_code = RecoveryPassword.find_code(request.form['your-code'])
        if recovery_code:
            account = User.find_username(request.form['your-username'])
            passwd = account.password
            return make_response(render_template('recovered.html', passwd=passwd), 200, the_header)
        else:
            passwd = "Sorry, you did not enter the correct information. Please get the correct info and try again."
            return make_response(render_template('recovered.html', passwd=passwd), 200, the_header)


# API resources (for Postman or Python Requests)
api.add_resource(CurrentNotes, '/currentnotes')
api.add_resource(SpecificNotes, '/currentnotes/<string:ID>')
api.add_resource(NotesByName, '/yournotes/<string:yourname>')
api.add_resource(SignIn, '/signin')
# API resources (for the web user interface)
api.add_resource(MyNotes, '/mynotes')
api.add_resource(NoteActions, '/mynotes/<string:ID>')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Register, '/register')
api.add_resource(ChangePassword, '/changepassword')
# for recovering your password
api.add_resource(Recovery, '/recovery')
if __name__ == "__main__":
    print('')
    print('##################################################################')
    print("To access the notes, copy the URL below and paste into your browser.")
    print('##################################################################')
    print('')
    app.run()
