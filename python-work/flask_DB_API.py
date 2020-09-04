#! /usr/bin/env python
"""This is a Flask application that will connect to my MariaDB database
server in a Docker container. It will use APIs to work with the data
in the database for Technology."""
from flask import Flask, request, jsonify
from flask_restful import Api, Resource
import mysql.connector as mariadb
passwd = input("Enter the DB server password: ")
#initialize the app
app = Flask(__name__)
api = Api(app)

#trying this out for the MariaDB module
the_config = {'host': '172.17.0.2', 'port': '3306', 'user': 'ebube',
'password': passwd, 'database': 'Technology'}

@app.route("/")
def index():
	return """ <h1>Welcome to this Flask page</h1>
	<p>This is another API setup only this time it works with APIs for 
	working with my MariaDB server in a container.</p>
	<p>This program in particular only works with the table 
	<strong>"GameConsoles"</strong> on the Technology database.</p>
	<ul>API routes: <li>/consoles (for getting and adding in consoles)</li>
	<li>/consoles/ID for getting, updating, or deleting the data from
	that console table</li></ul>"""	

class Consoles(Resource):
	#making a get request to database
	def get(self):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		cur.execute("select * from GameConsoles")
		rows = cur.fetchall()
		result = jsonify(rows)
		return result
	#making a post request to database
	def post(self):
		name = request.json['Name']
		company = request.json['Company']
		the_size = request.json['Size']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "insert into GameConsoles(Name, Company, Size) " 
		sql += "values ('{}', '{}', '{}')".format(name, company, the_size)
		cur.execute(sql)
		conn.commit()
		return {'Status': 201, 
		'Message': 'The entry was added successfully!!'}

class DataStats(Resource):
	#This is to get, update or delete stats by ID
	def get(self, entry_id):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		cur.execute("select * from GameConsoles where id = "+entry_id)
		rows = cur.fetchall()
		result = jsonify(rows)
		return result
	
	#update data (with put)	
	def put(self, entry_id):
		name = request.json['Name']
		company = request.json['Company']
		the_size = request.json['Size']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "update GameConsoles set Name='{}',".format(name)
		sql += " Company='{}', Size='{}' where id = ".format(company, the_size)
		sql += entry_id
		cur.execute(sql)
		conn.commit()
		return {'Status': 201, 
		'Message': 'The entry was updated successfully!!'}
		
	#delete the data from the table
	def delete(self, entry_id):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "delete from GameConsoles where id = "
		sql += entry_id
		redo_increment = "ALTER TABLE GameConsoles auto_increment=1"
		cur.execute(sql)
		conn.commit()
		cur.execute(redo_increment)
		conn.commit()
		return '', 204
		
api.add_resource(Consoles, '/consoles')
api.add_resource(DataStats, '/consoles/<string:entry_id>')
if __name__ == "__main__":
	app.run()
