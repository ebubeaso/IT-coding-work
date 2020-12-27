#! /usr/bin/env python
"""
I have started my website!! This is my personal website that I will host online for me as well as
other people can go an see. I am very excited to get this up and running. This is my first website
that i am making using Flask. Technically, I have made other websites, but those were more of Flask
web API applications. This is simply the backend of the website, which will handle all the page routing
for the user to navigate my website. I am going to use what I have learned with Flask and put it into
practice for people to see!!
"""
from flask import Flask, request, render_template, make_response, url_for
from flask_restful import Resource, Api
from flask_mail import Mail, Message

# Initialize the web application
app = Flask(__name__)
api = Api(app)
app.secret_key = "EbubeAsoITPro2020!"

# The HTML header to render the HTML pages
the_header = {'Content Type': 'text/html'}
@app.route('/')
def index():
    return make_response( render_template('index.html'), 200, the_header )

class About(Resource):
    def get(self):
        return make_response( render_template('about.html'), 200, the_header )

class MyWork(Resource):
    def get(self):
        return make_response( render_template('mywork.html'), 200, the_header )

class Contact(Resource):
    def get(self):
        return make_response( render_template('contact.html'), 200, the_header )

    def post(self):
        return make_response( render_template("submitted.html"), 200, the_header )
        
# The API routes
api.add_resource(About, '/about')
api.add_resource(MyWork, '/mywork')
api.add_resource(Contact, '/contact')

# Run the backend
if __name__ == "__main__":
    app.run(host='0.0.0.0')