#! /usr/bin/env python
"""This Flask application is made to practice using authentication with
Flask RESTful. We do not want just anyone messing with my data on my
database server. It will be using the LuxuryCars table from the Cars
database as practice"""

from flask import Flask, request, jsonify, make_response, session
import mysql.connector as mariadb
import jwt
import datetime
from functools import wraps

passwd = input("Enter the MariaDB password: ")
#Initialize the Flask application
app = Flask(__name__)

db_config = {'host': '172.17.0.2', 'port': '3306', 'user': 'ebube',
'password': passwd, 'database': 'Cars'}

#make the secret key
app.config['SECRET_KEY'] = 'BentleyAllDay2020'

def require_token(f):
	@wraps(f)
	def decorated(*args, **kwargs):
		#need to add token in a query string parameter
		token = request.args.get('token')
		if not token:
			return jsonify({'Message': 'Your token is missing!!'}), 403
		try:
			data = jwt.decode(token, app.config['SECRET_KEY'])
		except:
			return jsonify({'Message': 'Invalid token, Login again!'}), 403
		return f(*args, **kwargs)
	#return the decorator function
	return decorated

@app.route('/')
def index():
	return """ <h1>Welcome to this Flask page</h1>
	<p>This is another API setup only this time it works with APIs for 
	working with my MariaDB server in a container.</p>
	<p>This program in particular only works with the table 
	<strong>"LuxuryCars"</strong> on the Cars database. It will be using
	web tokesn as a way to authenticate and securely use the APIs to work
	with the database server</p>
	<ul>API routes: <li>/data/luxurycars (for getting and adding in 
	cars)</li> <li>/data,luxurycars/ID for getting, updating, or 
	deleting the data from that LuxuryCars table</li></ul>
	<p>Note: since this API web framework relies on token authentication,
	you will have to go to the <strong>/login</strong> page to get logged
	in and get a web token to use the API handles. Otherwise, you will
	not have any access to the APIs. You add in the token as a query-
	string parameter like this: <strong>(url)?token=(token generated from
	logging in)</strong>. The token expires every 10 minutes so you will
	have to login every 10 minutes!</p>"""

@app.route('/data/luxurycars', methods=['GET', 'POST'])
#add in the decorator
@require_token
def get_or_post():
	if request.method ==  'GET':
		conn = mariadb.connect(**db_config)
		cur = conn.cursor()
		sql = "SELECT * FROM LuxuryCars"
		cur.execute(sql)
		rows = cur.fetchall()
		result = jsonify(rows)
		return result
		
	if request.method == 'POST':
		brand = request.json['BrandName']
		model = request.json['ModelName']
		auto = request.json['isAutomatic']
		year = request.json['Year']
		conn = mariadb.connect(**db_config)
		cur = conn.cursor()
		sql = """INSERT INTO LuxuryCars (BrandName, ModelName, 
		isAutomatic, Year) VALUES('{}', '{}', '{}', '{}')
		""".format(brand, model, auto, year)
		cur.execute(sql)
		conn.commit()
		return 'Message: New luxury car has been successfully added!', 201
		
@app.route('/data/luxurycars/<ID>', methods=['GET', 'PUT', 'DELETE'])
@require_token
def get_update_or_delete(ID):
	if request.method == 'GET':	
		conn = mariadb.connect(**db_config)
		cur = conn.cursor()
		sql = "SELECT * FROM LuxuryCars where id = "
		sql += ID
		cur.execute(sql)
		rows = cur.fetchall()
		result = jsonify(rows)
		return result
	if request.method == 'PUT':
		brand = request.json['BrandName']
		model = request.json['ModelName']
		auto = request.json['isAutomatic']
		year = request.json['Year']
		conn = mariadb.connect(**db_config)
		cur = conn.cursor()
		sql = """UPDATE LuxuryCars set BrandName='{}', ModelName='{}',
		isAutomatic='{}', Year='{}' where id = '{}'
		""".format(brand, model, auto, year, ID)
		cur.execute(sql)
		conn.commit()
		return 'Message: Data has been successfully updated!', 201
		
	if request.method == 'DELETE':
		conn = mariadb.connect(**db_config)
		cur = conn.cursor()
		sql = "delete from LuxuryCars where id = "
		sql += ID
		redo_increment = "ALTER TABLE LuxuryCars auto_increment=1"
		cur.execute(sql)
		conn.commit()
		cur.execute(redo_increment)
		conn.commit()
		return '', 204

@app.route('/login')
#This allows you to securely use the authentication process
def logging_in():
	auth_ = request.authorization
	if auth_ and auth_.username == 'ebube' and auth_.password == 'pierre2020':
		token = jwt.encode({'user': auth_.username, 
		'exp': datetime.datetime.now()+datetime.timedelta(days=900)},
		app.config['SECRET_KEY'])
		return jsonify({'token': token.decode('UTF-8')})
	return make_response('Could not authenticate', 401, 
				{'WWW-Authenticate': 'Basic realm="Login Required"'})

if __name__ == "__main__":
	app.run()
