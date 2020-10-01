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
from flask import (Flask, request, render_template, jsonify, redirect, url_for, 
session, make_response)
from flask_restful import Resource, Api
from flask_jwt_extended import (JWTManager, create_access_token, 
create_refresh_token)
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy
import json
from user import User
from werkzeug.security import safe_str_cmp

#initialize the application
app = Flask(__name__)
api = Api(app) #allows us to make API resources
app.secret_key = "EbubeAso"

jwt = JWTManager(app)
#config the JWT token to expire at a later time (in seconds)
#this is also why I imported timedelta from datetime
app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=1200)

#set up SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///People.db"
app.config['SQLALCHEMY_BINDS'] = {"users": "sqlite:///UserData.db"}
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)

#making a model to represent the database
class Data(db.Model):
    #tells which table to look at
    __tablename__ = 'Employees'
    #These variable names match the column names in the Employees table
    FirstName = db.Column(db.Text)
    LastName = db.Column(db.Text)
    Age = db.Column(db.Integer)
    employeeID = db.Column(db.Integer, primary_key=True)
    Role = db.Column(db.Text)
    Salary = db.Column(db.Integer)

    def __init__(self, firstname, lastname, age, employeeID, role, salary):
        #Used the same capitalized names used in the columns of the table
        self.FirstName = firstname
        self.LastName = lastname
        self.Age = age
        self.employeeID = employeeID
        self.Role = role
        self.Salary = salary
    
    # Made this instance method so it can make the db model JSON serializable
    # It turns each object into a dictionary to be JSON serializable
    def jsonize(self):
        return {
            'First Name': self.FirstName,
            'Last Name': self.LastName,
            'Age': self.Age,
            'employeeID': self.employeeID,
            'Role': self.Role,
            'Salary': self.Salary
        }

# I am making a separate DB model for adding in users to the UserData database
# I will keep the code above as the same for handling logins, this is for
# SQLAlchemy practice
class NewUser(db.Model):
    #added the bind key so SQLAlchemy connects to the correct database
    __bind_key__ = 'users'
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)

    def __init__(self, _id, user, passwd):
        self.id = _id
        self.username = user
        self.password = passwd
    
    #This allows registered users to be JSON serializable
    def new_user_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }
# *** End of DB models ***

@app.route('/')
def index():
    return render_template("index.html")

# *** Start of requests using Web UI ***
class Search(Resource):
    def get(self):
        the_query = Data.query.all()
        result = [data.jsonize() for data in the_query]
        headers = {'Content Type': 'text/html'}
        return make_response(render_template('search.html', result=result),200,headers)

class Register(Resource):
    def get(self):
        the_header = {'Content Type': 'text/html'}
        return make_response(render_template('register.html'),200,the_header)
    
    def post(self):
        registered = [data.new_user_json() for data in NewUser.query.filter_by(
            username=str(request.form['username'])
            )]
        if len(registered) == 1:
            message = "There is already a user that has that username"
            the_header = {'Content Type': 'text/html'}
            return make_response(render_template('registered.html', output=message),400,the_header)
    
        user_table = [users.new_user_json() for users in NewUser.query.all()]
        id_key = '' 
        id_key += str(len(user_table)+1)
        new_user = NewUser(id_key, request.form['username'], request.form['password'])
        
        db.session.add(new_user)
        db.session.commit()
        message = "You are now registered! Close this page and login"
        the_header = {'Content Type': 'text/html'}
        return make_response(render_template('registered.html', output=message),200,the_header)
# *** End of application that uses the Web UI ***

# ****Used for Postman or Python requests ****
class Employees(Resource):
    def get(self):
        #same as running select * from Employees
        the_query = Data.query.all()
        return { 'Response': 200, 'Data': [data.jsonize() for data in the_query]}, 200
        
    #same as running an INSERT into query
    def post(self):
        the_query = Data.query.filter_by(employeeID=str(request.json['employeeID']))
        query_list = [data.jsonize() for data in the_query]
        if len(query_list):
            return {"Response": 400, "Message": "That employeeID already exists!"}, 400
        else:
            data = Data(request.json['FirstName'], request.json['LastName'], 
            request.json['Age'], request.json['employeeID'], 
            request.json['Role'], request.json['Salary'])
            #Check if the employeeID used was taken
            db.session.add(data)
            db.session.commit()
            return {"Response": 201, 
            "Message": "New Employee was added to the database!"}, 201

class SpecificEmployee(Resource):
    def get(self, employeeID):
        the_query = Data.query.filter_by(employeeID=employeeID)
        return { 'Response': 200, 'Data': [data.jsonize() for data in the_query]}, 200
        
    #updates or adds in data
    def put(self, employeeID):
        the_query = Data.query.get(employeeID)
        if the_query is not None:
            the_query.FirstName = request.json['FirstName']
            the_query.LastName = request.json['LastName']
            the_query.Age = request.json['Age']
            the_query.employeeID = request.json['employeeID']
            the_query.Role = request.json['Role']
            the_query.Salary = request.json['Salary']
            db.session.commit()
            return { "Response": 200, 
            "Message": f"Employee with ID {employeeID} was fully updated!"}, 200
        else:
            data = Data(request.json['FirstName'], request.json['LastName'],
            request.json['Age'], request.json['employeeID'],
            request.json['Role'], request.json['Salary'])
            db.session.add(data)
            db.session.commit()
            return {"Response": 201, 
            "Message": f"Employee with ID {employeeID} was added!"}, 200
    
    def patch(self, employeeID):
        the_query = Data.query.get(employeeID)
        if 'FirstName' in request.json:
            the_query.FirstName = request.json['FirstName']
            
        if 'LastName' in request.json:
            the_query.LastName = request.json['LastName']
            
        if 'Age' in request.json:
            the_query.Age = request.json['Age']
            
        if 'employeeID' in request.json:
            the_query.employeeID = request.json['employeeID']
            
        if 'Role' in request.json:
            the_query.Role = request.json['Role']
            
        if 'Salary' in request.json:
            the_query.Salary = request.json['Salary']
        db.session.commit()
        return {"Response": 203, 
        "Message": f"Employee with ID {employeeID} has been updated!"}, 203
        
    def delete(self, employeeID):
        Data.query.filter_by(employeeID=employeeID).delete()
        db.session.commit()
        return {"Message": "The employee has been deleted"}, 204
# *** End of application that can be used in Postman or Python Requests ***

# This is for logging into the database
@app.route('/login', methods = ['GET', 'POST'])
def signin():
    if request.method == 'GET':
        return render_template('login.html')
    if request.method == 'POST':
        
        if request.form:
            #when the admin logs in
            credentials = User.find_username(request.form['username'])
            if credentials and safe_str_cmp(credentials.password, request.form['password']) and request.form['username'] == 'ebubeaso':
                access_token = create_access_token(identity=credentials.id, fresh=True)
                refresh_token = create_refresh_token(credentials.id)
                output = {
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }
                return render_template('tokens.html', output=json.dumps(output)), 200
            #when another user logs in
            elif credentials and safe_str_cmp(credentials.password, request.form['password']):
                return render_template('index.html'), 200
            else:
                return jsonify({"Message": "Invalid credentials, Go back and try again!!"}), 401
        else:
            credentials = User.find_username(request.json['username'])
            #when admin logs in via Postman or Python requests
            if credentials and safe_str_cmp(credentials.password, request.json['password']) and request.json['username'] == 'ebubeaso':
                access_token = create_access_token(identity=credentials.id, fresh=True)
                refresh_token = create_refresh_token(credentials.id)
                tokens = {
                    'Message': 'Here are your tokens, keep them safe!',
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }
                return jsonify(tokens), 200
            else:
                return jsonify({"Message": "Invalid credentials, Go back and try again!!"}), 401


api.add_resource(Employees, '/employees')
api.add_resource(SpecificEmployee, '/employees/<string:employeeID>')
api.add_resource(Search, '/search')
api.add_resource(Register, '/register')
if __name__ == "__main__":
    app.run()
