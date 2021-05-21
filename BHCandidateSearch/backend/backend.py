#! /usr/bin/env python

import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
import json
import urllib.parse as urlparse
from urllib.parse import parse_qs
from datetime import datetime
from dateutil import parser

# initialize the app
app = Flask(__name__)
CORS(app) # allows us to use CORS
api = Api(app)
app.config['SECRET_KEY'] = "EbubeAso"

@app.route("/")
def index():
    return jsonify("This is simply the test route")

# helper function for parsing the URL
def parse_url(link):
    parsed = urlparse.urlparse(link)
    # looks for the query string parameter 'code'
    the_result = parse_qs(parsed.query)["code"]
    # since the result saves in a list, we just return the first element of the list
    return the_result[0]

class AccessCode(Resource):
    def post(self):
        # set up the variables
        client_id = request.json["clientID"]
        client_secret = request.json["clientSecret"]
        username = request.json["username"]
        password = request.json["password"]
        code_link = f"https://auth.bullhornstaffing.com/oauth/authorize?client_id={client_id}&response_type=code&action=Login&username={username}&password={password}"
        # run the first API query
        result = requests.post(code_link)
        if result.status_code != 200:
            return {"Message": "Auth failed"}, 400
        print("Got Access Code!")
        the_code = parse_url(result.url)
        # make and run the second API query
        access_token_link = f"https://auth.bullhornstaffing.com/oauth/token?grant_type=authorization_code&code={the_code}&client_id={client_id}&client_secret={client_secret}"
        access_token_result = requests.post(access_token_link)
        if access_token_result.status_code != 200:
            return {"Message": "Access token failed"}, 400
        print("Got Access Token!")
        # get the access token and refresh token for later
        token_data = access_token_result.json()
        access = token_data["access_token"]
        refresh = token_data["refresh_token"]
        # make and run the third API query to get the BH rest token
        rest_token_link = f"https://rest.bullhornstaffing.com/rest-services/login?version=*&access_token={access}"
        rest_token = requests.post(rest_token_link)
        if rest_token.status_code != 200:
            return {"Message": "Getting BH Rest Token failed"}, 400
        print("Got the REST Token! Authentication Complete!")
        return rest_token.json(), 200

class SingleSearch(Resource):
    def put(self):
        # the parser.parse method parses the string version of the date to a datetime object
        parse_date = parser.parse(request.json["date"])
        url = request.json["url"]
        # formats the date
        format_date = parse_date.strftime('%Y%m%d')
        token = request.json["token"]
        query = f"{url}search/Candidate?query=dateAdded:[{format_date}000000 TO {format_date}235959]&fields=id,firstName,lastName,status,email&BhRestToken={token}"
        search_results = requests.get(query).json()
        return search_results, 200

class BetweenSearch(Resource):
    def put(self):
        date1 = parser.parse(request.json["date1"])
        date2 = parser.parse(request.json["date2"])
        url = request.json["url"]
        format_date1 = date1.strftime('%Y%m%d')
        format_date2 = date2.strftime('%Y%m%d')
        token = request.json["token"]
        query = f"{url}search/Candidate?query=dateAdded:[{format_date1}000000 TO {format_date2}235959]&fields=id,firstName,lastName,status,email&BhRestToken={token}"
        search_results = requests.get(query).json()
        return search_results, 200

api.add_resource(AccessCode, "/authenticate")
api.add_resource(SingleSearch, "/search/single")
api.add_resource(BetweenSearch, "/search/between")
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555)
