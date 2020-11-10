""" This is a separate python file to handle the resource APIs when using the
web UI. This is to just shorten the main app.py code. """
from flask import (Flask, jsonify, request, render_template, session, url_for,
make_response, redirect)
from flask_restful import Resource, Api
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt_identity, 
create_refresh_token, jwt_required, jwt_refresh_token_required)
from werkzeug.security import safe_str_cmp
from db import db
import random
from datetime import datetime
import json
from models.dbmodels import User, TheNotes, RecoveryPassword

# for saving the access and refresh tokens
auth_token = ''
token_refresh = ''
# The header tag we will use for my Web UI routes
the_header = {'Content Type': 'text/html'}

#helper function made to add a random entry ID for a note
def id_generator():
    id_list = []
    id_numbers = [numbers for numbers in db.session.query(TheNotes.id)]
    for num in id_numbers:
        id_list.append(num[0])
    new_id = random.randint(111111, 999999)
    if new_id in id_list:
        new_id = id_list[1] + 1         
    return new_id

# *** Code for the web user interface ***
# For loggining and logging out
class Login(Resource):
    def get(self):
        return make_response(render_template("login.html"), 200, the_header)
    
    def post(self):
        # Check if user's input is in the database
        # If it is, they will get their tokens
        check_user = User.find_username(request.form['username'])
        if check_user and safe_str_cmp(check_user.password, request.form['password']):
            access_token = create_access_token(identity=check_user.id, fresh=True)
            refresh_token = create_refresh_token(identity=check_user.id)
            tokens = {"Login": "Success! Here are your tokens!",
                        "Your Access Token": access_token,
                        "Your Refresh Token": refresh_token
                    }
            auth_token = access_token
            token_refresh = refresh_token
            #making some session data to ensure that we are logged in
            session['user'] = request.form['username']
            return make_response( render_template('auth.html', 
                                output=json.dumps(tokens, indent=2, 
                                sort_keys=True)), 200, the_header )
        else:
            output = {"Message":"Sorry, it looks like you typed the wrong credentials. Please try again!"}
            return make_response( render_template('auth.html',
                                output=json.dumps(output)),400, the_header )


class Logout(Resource):
    def get(self):
        del session['user']
        return make_response( render_template("logout.html"), 200, the_header)

class MyNotes(Resource):
    def get(self):
        if 'user' in session:
            notes = TheNotes.query.filter_by(name=session['user']).order_by(TheNotes.date).all()
            result = [data.jsonize() for data in notes]
            return make_response( render_template('notes.html', output=result), 200, the_header )
        else:
            output = {"Message":"You are not logged in, please login."}
            return make_response( render_template('auth.html',
                                output=json.dumps(output)),400, the_header )
    
    def post(self):
        # make the new entry
        entry_id = id_generator()
        username = session['user']
        new_entry = TheNotes(entry_id, datetime.now(), username, 
                        request.form['note-entry'])
        print(type(request.form['note-entry']))
        db.session.add(new_entry)
        print('I ran pretty good.')
        db.session.commit()
        return make_response(redirect(url_for('mynotes')), 201, the_header)
# *** End of code for web user interface ***