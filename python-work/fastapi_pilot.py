#! /usr/bin/env python
"""
This is my pilot application where I am using FastAPI 
for the first time. I am using this so that I can get more familiar with this
framework 
"""
from fastapi import FastAPI, Query
from typing import Dict
from pydantic import BaseModel
app = FastAPI()
@app.get("/")
async def main() -> Dict:
    return {'Message': 'Welcome to using the FastAPI for the first time'}
@app.post("/")
async def post_message() -> Dict:
    return {'Message': 'This is a POST Request using FastAPI'}
@app.put("/")
async def put_message() -> Dict:
    return {'Message': 'This is a PUT Request using FastAPI'}
@app.delete("/")
async def delete_message() -> Dict:
    return {'Message': 'This is a DELETE Request using FastAPI'}
# This is for making JSON objects using Python
class UserAuth(BaseModel):
    username: str
    password: str
@app.post("/login")
async def login_creds(user: UserAuth):
    return {
        'Message': f'Your username is {user.username} and your password is {user.password}'
    }
# Testing out path based parameters
@app.get("/hello/{name}")
async def greet_user(name):
    if name == '':
        return {'Message': 'Please enter in your name so that I can greet you'}
    return {'Message': f'Hello {name}! Thank you for using my FastAPI API'}
# Try using query string parameters
@app.get('/greeting')
async def greetings(name: str = Query(..., max_length=30)):
    return {'Message': f'hello {name}!'}