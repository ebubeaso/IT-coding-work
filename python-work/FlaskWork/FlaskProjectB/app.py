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
from flask import Flask, request, render_template, jsonify, redirect, url_for
#import sqlite3
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from datetime import timedelta
from app_security import authenticate, identity
from flask_sqlalchemy import SQLAlchemy
#initialize the application
app = Flask(__name__)
api = Api(app) #allows us to make API resources
app.secret_key = "EbubeAso"
jwt = JWT(app, authenticate, identity)

#config the JWT token to expire at a later time (in seconds)
#this is also why I imported timedelta from datetime
app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=1200)

#set up SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///People.db"
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
    
    #Made this instance method so it can make the db model JSON serializable
    def json(self):
        return {
            'firstname': self.FirstName,
            'lastname': self.LastName,
            'age': self.Age,
            'employeeID': self.employeeID,
            'role': self.Role,
            'salary': self.Salary
        }
    # @classmethod
    # def find_by_id(cls, employeeID):
    #     result = cls.query.filter_by(employeeID=employeeID)
    #     return result

@app.route('/')
def index():
    return render_template("index.html")

class Employees(Resource):
    def get(self):
        #same as running select * from Employees
        the_query = Data.query.all()
        return { 'Response': 200, 'Data': [data.json() for data in the_query]}, 200
        
    #same as running an INSERT into query
    def post(self):
        the_query = Data.query.filter_by(employeeID=str(request.json['employeeID']))
        query_list = [data.json() for data in the_query]
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
        return { 'Response': 200, 'Data': [data.json() for data in the_query]}, 200
        
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
        
        
api.add_resource(Employees, '/employees')
api.add_resource(SpecificEmployee, '/employees/<string:employeeID>')
if __name__ == "__main__":
    app.run()
