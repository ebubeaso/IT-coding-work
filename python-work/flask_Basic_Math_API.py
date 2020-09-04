#!/usr/bin/env python
"""This is my first shot at making an API request with Flask"""
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	if (request.method == 'POST'):
		the_json = request.get_json()
		return jsonify({'Your POST':the_json}), 201
	else:
		return jsonify({"message": "You made an API call, YAYY!!!"})

@app.route('/addition/<int:num1>+<int:num2>', methods=['GET'])
def add(num1, num2):
	return jsonify({'Result': num1+num2})

@app.route('/subtract/<int:num1>-<int:num2>', methods=['GET'])
def subtraction(num1, num2):
	return jsonify({'Result': num1-num2})

@app.route('/multiply/<int:num1>*<int:num2>', methods=['GET'])
def multiplication(num1, num2):
	return jsonify({'Result': num1*num2})
	
@app.route('/division/<int:num1>+<int:num2>', methods=['GET'])
def division(num1, num2):
	return jsonify({'result': num1/num2})

if __name__ == "__main__":
	app.run()
