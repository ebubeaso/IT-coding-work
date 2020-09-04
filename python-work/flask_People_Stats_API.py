#! /usr/bin/env python
"""
This is another set of flask practice. This one will make API requests
on the stats of different people. It will use shelve as a small
database, more of an abstract database, for storing the stats on people.
"""
from flask import Flask, g
from flask_restful import Resource, Api, reqparse
import shelve

#initialize the application
app = Flask(__name__)
api = Api(app)

#This handles the database connection, but we use shelve.open
#Since we are using shelve and not an actual database
def get_db():
	db = getattr(g, '_database', None)
	if db is None:
		db = g._database = shelve.open("peoplestats.db", writeback=True)
	return db
#this helps with closing the database connection
@app.teardown_appcontext
def teardown_db(exception):
	db = getattr(g, '_database', None)
	if db is not None:
		db.close()

@app.route("/")
def index():
	return """<h1>Welcome to the Flask Custom Home Page!!</h1> 
	<p>it is nothing fancy, but it is a way to practice making an
	using APIs with Python, which I think is pretty cool!</p>
	<p>There are two endpoints that you can use for this API which are
	<strong>/people</strong> and <strong>/people/ID</strong> which are
	the endpoints used for the API calls.</p> 
	<p>You can use GET and POST requests on the
	first endpoint, but for the second you can only use GET, PUT or
	DELETE requests.</p>
	<p>for POST or PUT requests, be sure to include the ID, full name,
	age, D.O.B., profession and hometown of the person!!</p>"""

#The class made to help make the API on the people stats
class People(Resource):
	def get(self):
		shelf = get_db()
		the_keys = list(shelf.keys())
		people = []
		
		#Loop through data store and adds it to the empty people array
		for key in the_keys:
			people.append(shelf[key])
		result = sorted(people, key = lambda x: x['ID'])
		return {"Result": "SUCCESS!!", "data": result}, 200

	def post(self):
		parser = reqparse.RequestParser()
		parser.add_argument('ID', required=True)
		parser.add_argument('Full Name', required=True)
		parser.add_argument('Age', required=True)
		parser.add_argument('D.O.B.', required=True)
		parser.add_argument('Profession', required=True)
		parser.add_argument('Hometown', required=True)

		#parse arguments into object
		args = parser.parse_args()
		shelf = get_db()
		shelf[args['ID']] = args

		return {'Result': 'Success', 'data': args}, 201

class PeopleStats(Resource):
	def get(self, ID):
		shelf = get_db()
		#if key does not exist, then give a 404 error
		if not (ID in shelf):
			return{
			"Message": "The info that you are looking for does not exist"
				}, 404
		return {"Message": "We found the info!", "data": shelf[ID]}, 200
	
	def put(self, ID):
		shelf = get_db()
		if not (ID in shelf):
			return{
			"Message": "The info that you are looking for does not exist"
				}, 404
		
		put_args = reqparse.RequestParser()
		put_args.add_argument('Full Name', type=str)
		put_args.add_argument('Age', type=str)
		put_args.add_argument('D.O.B.', type=str)
		put_args.add_argument('Profession', type=str)
		put_args.add_argument('Hometown', type=str)	
		args = put_args.parse_args()
		shelf = get_db()
		
		return {"Message": "Updated stats on ID {}".format(ID),
		"data": args}
		
	def delete(self, ID):
		shelf = get_db()
		if not (ID in shelf):
			return
			{
			"Message": "The info that you are looking for does not exist"
				}, 404
		del shelf[ID]
		return '', 204
		
#The API resource endpoints
api.add_resource(People, '/people')
api.add_resource(PeopleStats, '/people/<string:ID>')

if __name__ == "__main__":
	app.run()
