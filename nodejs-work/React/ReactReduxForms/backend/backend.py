#! /usr/bin/env python
"""
This is the backend Python code that will be housing my web application where I use
React Redux for a form page
"""
from flask import Flask, url_for, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
# Setup the middleware
app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/")
def index():
    pass

if __name__ == "__main__":
    app.run()
