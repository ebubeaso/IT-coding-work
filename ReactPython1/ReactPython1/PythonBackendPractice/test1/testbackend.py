#! /usr/bin/env python
"""
This is a Flask backend that is used to login and retrieve data from the database
"""
from flask import (Flask, request, render_template, redirect, url_for, jsonify,
session, make_response)
from flask_restful import Resource, Api
from flask_jwt_extended import (JWTManager, create_access_token, create_refresh_token,
jwt_required, get_jwt_identity)
from flask_cors import CORS, cross_origin
from flask_wtf.csrf import CSRFProtect
from datetime import timedelta
from werkzeug.security import safe_str_cmp
from getpass import getpass
from dbmodels import db, CarData, Accounts
import hashlib

# get the MariaDB password
passwd = ''
with open('dbpass.txt', 'r') as f:
    passwd = f.read()[:-1]
#Initialization
app = Flask(__name__)
CORS(app)
api = Api(app)
#csrf = CSRFProtect(app)
app.secret_key = "EbubePython2021!!"
jwt = JWTManager(app)
# Set a timeout as to when a JWT token expires
app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=1200)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://asoebube:"+passwd+"@172.17.0.2/Cars"
app.config['SQLALCHEMY_BINDS'] = {"accounts": "sqlite:///Users.db"}
#turns off the flask SQLAlchemy tracker to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# initialize the database models
db.init_app(app)

#make the header (JSON)
headers = {
    "Content-Type": "application/json"
}
# store the server side token:
access_token_list = []
refresh_token_list = []
# function for handling tokens
def update_token_list(access_token, refresh_token):
    access_hashed = hashlib.sha256(access_token.encode()).hexdigest()
    refresh_hashed = hashlib.sha256(refresh_token.encode()).hexdigest()
    access_token_list.append(access_hashed)
    refresh_token_list.append(refresh_hashed)
    return access_token_list, refresh_token_list

# The API routes
@app.route('/')
def index():
    return jsonify("""This is a response when you call the root endpoint. Looks like you can 
    access the root endpoint!!""")

"""This section handles the login and registering:"""
class Login(Resource):
    def post(self):
        check_entry = Accounts.search_username(request.json["username"])
        if check_entry and safe_str_cmp(check_entry.password, request.json["password"]):
            access = create_access_token(identity=check_entry.id, fresh=True)
            refresh = create_refresh_token(identity=check_entry.id)
            tokens = {
                "Message": "Login Successful! Here are your tokens!",
                "Access Token": access,
                "Refresh Token": refresh
            }
            # add the access and refresh tokens to be stored server side
            update_token_list(access, refresh)
            return tokens, 200
        else:
            return {"Message": "Authentication Failed, Try again!"}, 400
"""End of login and registering"""

class CheckToken(Resource):
    """This resource is used to ensure that the client is using the access token"""
    def post(self):
        token_entry = request.json["token"]
        check_hash = hashlib.sha256(token_entry.encode()).hexdigest()
        if check_hash in access_token_list:
            return {"message": "authorized"}, 200
        else:
            return {"message": "unauthorized"}, 400
class FullData(Resource):
    @jwt_required
    def get(self):
        # Get all the data from the table
        the_query = CarData.query.all()
        result = [data.jsonize() for data in the_query]
        return result[:-1]

class UpdateToken(Resource):
    @jwt_required
    # @jwt_required(refresh=True)
    def put(self):
        token_refresh = request.json["Refresh Token"]
        check_hash = hashlib.sha256(token_refresh.encode()).hexdigest()
        if check_hash in refresh_token_list:
            client_id = get_jwt_identity()
            new_token = create_access_token(identity=client_id, fresh=False)
            return {"Message": "You got a new token!!", "New Token": new_token}, 200
        else:
            return {"Message": "Token renewal failed, please try again!"}, 400

# Resources
api.add_resource(FullData, "/cars")
api.add_resource(Login, "/login")
api.add_resource(CheckToken, "/authorize")
api.add_resource(UpdateToken, "/renew")
# Run the backend
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
