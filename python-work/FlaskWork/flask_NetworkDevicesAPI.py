#! /usr/bin/env python
""" 
This Flask API is set up to manage various routers, switches and servers
in the enterprise. It connects to the NetworkDevices database, which has
the data on the routers, switches, and servers that are online. Their
data will be retrieved, added, updated or deleted as needed through the
use of APIs. Furthermore, it will add in authentication to help make the
API requests secure.
"""

from flask import Flask, request, jsonify
from flask_restful import Api, Resource
import mysql.connector as mariadb

passwd = input("Enter the DB server password: ")
#initialize the app
app = Flask(__name__)
api = Api(app)

#trying this out for the MariaDB module
the_config = {'host': '172.17.0.2', 'port': '3306', 'user': 'ebube',
'password': passwd, 'database': 'NetworkDevices'}

@app.route("/")
def index():
	return """ <h1>Welcome to this Flask page</h1>
	<p>This is another API setup only this time it works with data on 
	Network Devices stored in a MariaDB server in a container.</p>
	<p>This program only works with the tables <strong>"Routers"</strong>,
	<strong>"Switches"</strong> and <strong>"Servers"</strong> 
	on the NetworkDevices database.</p>
	<ul>API routes: <li>/routers (for getting and adding in routers)</li>
	<li>/routers/ID for getting, updating, or deleting the data from
	the routers table</li>
	<li>/switches (for getting and adding in network switches)</li>
	<li>/switches/ID (for getting, updating or deleting info/stats on a
	particular switch)</li>
	<li>/servers (to get or add in server information)</li>
	<li>/servers/ID to get, update or delete on a particular server in
	the database)</li></ul>"""	

class Router(Resource):
	#GET request to get all Routers
	def get(self):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		cur.execute("select * from Routers")
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#POST request to add a new router
	def post(self):
		name = request.json['Name']
		ip = request.json['IP']
		subnet = request.json['SubnetMask']
		dept = request.json['Department']
		the_type = request.json['RouterType']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """insert into Routers (Name, IP, SubnetMask, Department, 
		RouterType) values ('{}', '{}', '{}', 
		'{}', '{}')""".format(name, ip, subnet, dept, the_type)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "New Router was added and online!"}

class RouterStats(Resource):
	#GET request on a specific router
	def get(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "select * from Routers where id = "
		sql += ID
		cur.execute(sql)
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#PUT request to update data on a router
	def put(self, ID):
		name = request.json['Name']
		ip = request.json['IP']
		subnet = request.json['SubnetMask']
		dept = request.json['Department']
		the_type = request.json['RouterType']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """update Routers set Name='{}', IP='{}', SubnetMask='{}',
		Department='{}', RouterType='{}' where id = '{}' """.format(name, 
		ip, subnet, dept, the_type, ID)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "Router stats has been updated!!"}
		
	#DELETE request on router stats
	def delete(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "delete from Routers where id = "
		sql += ID
		redo_increment = "ALTER TABLE Routers auto_increment=1"
		cur.execute(sql)
		conn.commit()
		cur.execute(redo_increment)
		conn.commit()
		conn.close()
		return '', 204

class Switch(Resource):
	#GET request to get all switches
	def get(self):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		cur.execute("select * from Switches")
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#POST request to add a new switch
	def post(self):
		name = request.json['Name']
		ip = request.json['IP']
		dept = request.json['Department']
		ports = request.json['PortsOn']
		the_type = request.json['SwitchType']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """insert into Switches (Name, IP, Department, PortsOn, 
		SwitchType) values ('{}', '{}', '{}', 
		'{}', '{}')""".format(name, ip, dept, ports, the_type)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "New Switch was added and online!"}

class SwitchStats(Resource):
	#GET request on a specific switch
	def get(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "select * from Switches where id = "
		sql += ID
		cur.execute(sql)
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#PUT request to update data on a switch
	def put(self, ID):
		name = request.json['Name']
		ip = request.json['IP']
		dept = request.json['Department']
		ports = request.json['PortsOn']
		the_type = request.json['SwitchType']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """update Switches set Name='{}', IP='{}', Department='{}', 
		PortsOn='{}', SwitchType='{}' where id = '{}'""".format(name, ip, 
		dept, ports, the_type, ID)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "Switch stats has been updated!!"}
		
	#DELETE request on switch stats
	def delete(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "delete from Switches where id = "
		sql += ID
		redo_increment = "ALTER TABLE Switches auto_increment=1"
		cur.execute(sql)
		conn.commit()
		cur.execute(redo_increment)
		conn.commit()
		conn.close()
		return '', 204

class Servers(Resource):
	#GET request to get all servers
	def get(self):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		cur.execute("select * from Servers")
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#POST request to add a new server
	def post(self):
		name = request.json['Name']
		ip = request.json['IP']
		subnet = request.json['SubnetMask']
		dept = request.json['Department']
		the_type = request.json['Type']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """insert into Servers (Name, IP, SubnetMask, Department, 
		Type) values ('{}', '{}', '{}', 
		'{}', '{}')""".format(name, ip, subnet, dept, the_type)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "New Server was added and online!"}

class ServerStats(Resource):
	#GET request on a specific server
	def get(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "select * from Servers where id = "
		sql += ID
		cur.execute(sql)
		rows = cur.fetchall()
		result = jsonify(rows)
		conn.close()
		return result
	
	#PUT request to update data on a router
	def put(self, ID):
		name = request.json['Name']
		ip = request.json['IP']
		subnet = request.json['SubnetMask']
		dept = request.json['Department']
		the_type = request.json['Type']
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = """update Servers set Name='{}', IP='{}', SubnetMask='{}',
		Department='{}', Type='{}' where id = '{}' """.format(name, 
		ip, subnet, dept, the_type, ID)
		cur.execute(sql)
		conn.commit()
		conn.close()
		return {"Response": 201, "Message": "Server stats has been updated!!"}
		
	#DELETE request on server stats
	def delete(self, ID):
		conn = mariadb.connect(**the_config)
		cur = conn.cursor()
		sql = "delete from Servers where id = "
		sql += ID
		redo_increment = "ALTER TABLE Servers auto_increment=1"
		cur.execute(sql)
		conn.commit()
		cur.execute(redo_increment)
		conn.commit()
		conn.close()
		return '', 204

#the API links to use
api.add_resource(Router, '/routers')
api.add_resource(RouterStats, '/routers/<string:ID>')
api.add_resource(Switch, '/switches')
api.add_resource(SwitchStats, '/switches/<string:ID>')
api.add_resource(Servers, '/servers')
api.add_resource(ServerStats, '/servers/<string:ID>')
if __name__ == "__main__":
	app.run()
