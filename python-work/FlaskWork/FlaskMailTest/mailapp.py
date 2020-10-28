#! /usr/bin/env python
""" 
This is a Flask mail application that I decided to make as a way to practice using the mailing
functionality of using the Flask mail to make an API that sends emails to people. I am testing it out
to add on to my website once I have it up and running. You will send emails by making a POST request to
the '/sendmail' route using JSON data (we will do form data in another script). Make sure you send in 
JSON data for your emails.
"""

from flask import Flask, request, jsonify
from flask_mail import Mail, Message

#initialize
app = Flask(__name__)
#inputs
print("Enter the email address to send the emails to:")
print("")
email_username = input("==> ")
print("")
email_password = input("Enter your email password: ")

app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = email_username
app.config['MAIL_PASSWORD'] = email_password
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/')
def index():
    return jsonify({
        "Message": "Welcome to my test mail API application!!",
        "Text": "This is used as a test to automate sending emails through APIs."
    })

@app.route('/sendmail', methods=['GET', 'POST'])
def sendmail():
    if request.method == 'POST':
        recipient_list = request.json['recipients']
        subject = request.json['subject']
        email = request.json['message']
        message = Message(subject, sender=email_username, recipients=recipient_list)
        message.body = email
        mail.send(message)

        return jsonify({"Message": "Your email sent successfully!!"})
    else:
        return jsonify({"Message": "The mail API app is working good!"})


if __name__ == "__main__":
    app.run()