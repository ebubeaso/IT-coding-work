""" 
To shorten the lines of code used in the main app.py file, I decided to move
my API Resource classes to a different Python file and then have them imported.
These are all the Resource classes that are accessed when using the Notes
application through an API client like Postman, Python Requests, or even SoapUI.
"""
from flask import request
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt_identity, 
create_refresh_token, jwt_required, jwt_refresh_token_required)
from werkzeug.security import safe_str_cmp
import random
from datetime import datetime
from db import db
from flask_restful import Resource, Api
from models.dbmodels import User, TheNotes, RecoveryPassword

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
    
    def post(self):
        # Need a list of the ID numbers in database to prevent duplicates
        entry_id = id_generator()
        # make the new entry
        new_entry = TheNotes(entry_id, datetime.now(), request.json['name'], 
                        request.json['note'])
        db.session.add(new_entry)
        db.session.commit()
        return {"Message": "Successfully added a new note!"}, 201

class SpecificNotes(Resource):
    def get(self, ID):
        the_query = TheNotes.query.filter_by(id=ID)
        return {'Current Notes': [notes.jsonize() for notes in the_query]}
    
    def put(self, ID):
        the_query = TheNotes.query.get(ID)
        #You can only modify your notes
        if the_query is not None:
            the_query.note = request.json['note']
            db.session.commit()
            return {"Message": "Your note entry has been updated!!"}, 200
        else:
            #add in a new entry
            data = TheNotes(ID, datetime.now(), request.json['name'], 
            request.json['note'])
            db.session.add(data)
            db.session.commit()
            return {"Message": "New entry has been added!"}, 201

    def delete(self, ID):
        TheNotes.query.filter_by(id=ID).delete()
        db.session.commit()
        return {"Message": f"entry {ID} has been deleted"}, 200

class NotesByName(Resource):
    def get(self, yourname):
        print('I ran!!!')
        the_query = TheNotes.query.filter_by(name=yourname)
        return {f"Notes from {yourname}": [note.jsonize() for note in the_query]}
# *** End of code for Postman/Python requests ***