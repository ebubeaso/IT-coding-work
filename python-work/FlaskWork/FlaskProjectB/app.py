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
path = """/home/pi/Documents/IT-coding-work/python-work/FlaskWork/
FlaskProjectB/People.db"""
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///People.db"
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)

#making a model to represent the database
class Data(db.Model):
    #tells which table to look at
    __tablename__ = 'Employees'
    #id = db.Column(db.Integer, primary_key=True)
    FirstName = db.Column(db.Text)
    LastName = db.Column(db.Text)
    Age = db.Column(db.Integer)
    employeeID = db.Column(db.Integer, primary_key=True)
    Role = db.Column(db.Text)
    Salary = db.Column(db.Integer)

    def __init__(self, firstname, lastname, age, employeeID, role, salary):
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

@app.route('/')
def index():
    return "<h1>Hellow and welcome to flask!!!</h1>"

class Employees(Resource):
    def get(self):
        #same as running select * from Employees
        the_query = Data.query.all()
        return {'Data': [data.json() for data in the_query]}
    def post(self):
        data = Data(request.json['FirstName'], request.json['LastName'], 
        request.json['Age'], request.json['employeeID'], 
        request.json['Role'], request.json['Salary'])
        db.session.add(data)
        db.session.commit()

class SpecificEmployee(Resource):
    def get(self, employeeID):
        the_query = Data.query.filter_by(employeeID=employeeID)
        return {'Data': [data.json() for data in the_query]}
    def put(self, employeeID):
        pass
    def patch(self, employeeID):
        pass
    def delete(self, employeeID):
        the_query = Data.query.filter_by(employeeID=employeeID).delete()
        db.session.commit()
        return {"Message": "The employee has been deleted"}
api.add_resource(Employees, '/employees')
api.add_resource(SpecificEmployee, '/employees/<string:employeeID>')
if __name__ == "__main__":
    app.run()
