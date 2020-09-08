#! /usr/bin/env python
"""This is another Flask API application that I have made that will allow me to
securely access data from a database in my MariaDB container. First, the user
will have to login to use the API. Once logged in, the user will be granted a 
token for the session that they must add to their API requests as a query string
parameter in order for the API requests to be authorized. Every time you 
restart this Flask application you will have to go to the login to get a new
token to use the API requests."""
from flask import Flask, request, jsonify, make_response
import mysql.connector as mariadb
from functools import wraps
import random

passwd = input("Enter the database password: ")

#initialize the application
app = Flask(__name__)
db_config = {'host': '172.17.0.2', 'port': '3306', 'user': 'ebube',
'password': passwd, 'database': 'People'}

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = request.args.get('token')
        print(token)
        if not token:
            return jsonify({'Message': 'Your token is missing!!',
            'Response': 403})
        #data = t[0]
        if int(token) not in t:
            return jsonify({'Message': 'Invalid token, Login again!', 
            'token': token}), 403
        return f(*args, **kwargs)
    #return the decorator function
    return decorator

@app.route('/')
def index():
    return """<h1>Hello fellow API user!</h1>
    <p>You will only be able to access important data if you login and have
    a token. Otherwise, you will not be able to use this!</p>
    <p> Please login at: <a href="http://localhost:5000/login">/login</a> if you
    want to proceed.."""

@app.route('/ADUsers', methods=['GET', 'POST'])
@token_required
def get_or_post_AD_info():
    #Allows you to get all AD user information or add in a new user
    if request.method == 'GET':
        conn = mariadb.connect(**db_config)
        cur = conn.cursor()
        sql = "select * from ActiveDirectoryUsers"
        cur.execute(sql)
        rows = cur.fetchall()
        result = jsonify(rows)
        return result

    if request.method == 'POST':
        firstname = request.json['FirstName']
        lastname = request.json["LastName"]
        employeeID =  request.json["employeeID"]
        admin = request.json["isAdmin"]
        permissions = request.json["Permissions"]
        conn = mariadb.connect(**db_config)
        cur = conn.cursor()
        sql = """insert into ActiveDirectoryUsers (FirstName, LastName, 
        employeeID, isAdmin, Permissions) values ('{}', '{}', '{}', '{}', '{}')
        """.format(firstname, lastname, employeeID, admin, permissions)
        cur.execute(sql)
        conn.commit()
        return 'Message: New entry has been successfully added!', 201

@app.route('/ADUsers/<ID>', methods=['GET', 'PUT', 'DELETE'])
@token_required
def user_info_by_ID(ID):

    #Get a specific AD user by their ID
    if request.method == 'GET':
        conn = mariadb.connect(**db_config)
        cur = conn.cursor()
        sql = f"select * from ActiveDirectoryUsers where id = {ID}"
        cur.execute(sql)
        rows = cur.fetchall()
        result = jsonify(rows)
        return result

    #Update the information about an existing AD user by their ID
    if request.method == 'PUT':
        firstname = request.json['FirstName']
        lastname = request.json["LastName"]
        employeeID =  request.json["employeeID"]
        admin = request.json["isAdmin"]
        permissions = request.json["Permissions"]
        conn = mariadb.connect(**db_config)
        cur = conn.cursor()
        sql = """update ActiveDirectoryUsers set Firstname='{}', 
        LastName='{}', employeeID='{}', isAdmin='{}', Permissions='{}'
        where id = '{}'""".format(firstname, lastname, employeeID, admin,
        permissions, ID)
        cur.execute(sql)
        conn.commit()
        return f"""Message: AD user {firstname} {lastname} has been
         successfully updated!""",203
    
    #Delete an AD user from the database
    if request.method == 'DELETE':
        conn = mariadb.connect(**db_config)
        cur = conn.cursor()
        sql = f"delete from ActiveDirectoryUsers where id = {ID}"
        next_id = str(int(ID) + 1)
        reset_increment = f"alter table ActiveDirectoryUsers AUTO_INCREMENT={next_id}"
        cur.execute(sql)
        cur.execute(reset_increment)
        conn.commit()
        return '', 204

#store the token after login
t = ['']

@app.route('/login')
def login():
    auth_ = request.authorization
    if auth_ and auth_.username == 'ebube' and auth_.password == 'EbubeAso!':
        token = random.randint(100000000, 999999999)
        t[0] = token
        return jsonify({'Authorization Token': token})
    else:
        return make_response('Could not authenticate', 401, 
				{'WWW-Authenticate': 'Basic realm="Login Required"'})

if __name__ == "__main__":
    app.run()