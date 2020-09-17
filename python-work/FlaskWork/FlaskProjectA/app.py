#! /usr/bin/env python
"""This Flask web application will make APIs that connect to and work with
a SQLite database known as the Entreprise database. It will manage the user 
account data on that database. Be sure to go to the /auth endpoint in order
to properly authenicate to the API application"""

from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
import sqlite3
#importing the security python file that I made
from security import authenticate, identity

#initialize the application
app = Flask(__name__)
app.secret_key = 'PierreThePolecat?!'
api = Api(app)

#Allow for authentication
jwt = JWT(app, authenticate, identity)

@app.route('/')
def index():
    return """<h1>Welcome!!</h1>
    <p>This is a test API using my newfound Flask skills and web dev skills from
    Udemy. I think they are pretty cool and worth the time and energy</p>
    <p>Here are the resources to look at:</p>
    <h4>Resource Endpoints:</h4
    <ul>
        <li>/employees (for all or adding a new employee)</li>
        <li>/employees/<string:ID> (for working with a specific employee data)
        </li>
    </ul>
    <p><strong>Note:</strong> You have to go to the /auth endpoint to
    authenticate using the correct username and password!! You do that by using
    a post request that has the username and password in JSON format.</p>
    <p>After authenticating, include the token in the header of every API request
    that you do to use this Flask application</p>"""
#making our classes
class Employee(Resource):
    #make the get and post methods
    @jwt_required()
    def get(self):
        conn = sqlite3.connect('Entreprise.db')
        cur = conn.cursor()
        sql = 'select * from Employees'
        cur.execute(sql)
        rows = cur.fetchall()
        conn.close()
        return {'Message': 'Success!', 'Data': rows}, 200
    
    @jwt_required()
    def post(self):
        firstname = request.json['FirstName']
        lastname = request.json['LastName']
        age = request.json['Age']
        employee_id = request.json['employeeID']
        role = request.json['Role']
        dept = request.json['Department']
        
        conn = sqlite3.connect('Entreprise.db')
        cur = conn.cursor()
        sql = """insert into Employees (FirstName, LastName, Age, employeeID,
        Role, Department) values ('{}', '{}', '{}', '{}', '{}', '{}')
        """.format(firstname, lastname, age, employee_id, role, dept)
        cur.execute(sql)
        conn.commit()
        conn.close()
        return {'Message': 'New Employee has been added!!'}, 201


#For getting specific Employee info
class EmployeeStats(Resource):
    @jwt_required()
    def get(self, ID):
        conn = sqlite3.connect('Entreprise.db')
        cur = conn.cursor()
        sql = f"select * from Employees where id = {ID}"
        cur.execute(sql)
        row = cur.fetchone()
        conn.close()
        return {'Message': 'Success!!', 'Data': row}, 200

    @jwt_required()
    def put(self, ID):
        firstname = request.json['FirstName']
        lastname = request.json['LastName']
        age = request.json['Age']
        employee_id = request.json['employeeID']
        role = request.json['Role']
        dept = request.json['Department']
        
        conn = sqlite3.connect('Entreprise.db')
        cur = conn.cursor()
        sql = """update Employees set FirstName='{}', LastName='{}', Age='{}',
        employeeID='{}', Role='{}', Department='{}' where id = '{}'
        """.format(firstname, lastname, age, employee_id, role, dept, ID)
        cur.execute(sql)
        conn.commit()
        conn.close()
        return {'Message': f"Employee at id {ID} has been updated!!"}, 200

    @jwt_required()
    def delete(self, ID):
        conn = sqlite3.connect('Entreprise.db')
        cur = conn.cursor()
        sql = f"delete from Employees where id = {ID}"
        cur.execute(sql)
        cur.commit()
        conn.close()
        return {'Message': 'Delete Successful'}, 204

api.add_resource(Employee, '/employees')
api.add_resource(EmployeeStats, '/employees/<string:ID>')
if __name__ == "__main__":
    app.run()