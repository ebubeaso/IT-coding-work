#! /usr/bin/env python
"""
I am making another FastAPI Python script, mainly because I am starting to like using 
this framework for making REST APIs. I could potentially use this to serve single page
web applications like React or Angular in the future. For now, I am using this particular 
Python file to connect and interact with a database
"""
from fastapi import FastAPI
from pydantic import BaseModel
from getpass import getpass
from fastapi.param_functions import Query
from peewee import *
# initialize the FastAPI App
app = FastAPI()
# Setup the database parameters
"""username = input("Enter the username of your database user: ")
host = input("Enter the url or IP address of the Database: ")
port = input("Enter in the port number for your database: ")
passwd = getpass(prompt="Enter your db user's password: ")"""
with open('dbcreds', 'r') as file:
    data = file.readlines()
info_list = []
for i in data:
    info = i[i.index("=")+1:-1]
    info_list.append(info)
# create the database engine
db = MySQLDatabase('Technology', user=info_list[0], password=info_list[3], 
host=info_list[1], port=int(info_list[2]))
# make the base model
class MainModel(Model):
    class Meta:
        database = db
# make a model that represents a table
class Phones(MainModel):
    ID = IntegerField(primary_key=True)
    company = TextField()
    name = TextField()
# bind this class to the database

# now for the api routes
@app.get("/phones/all")
async def all_phones():
    query = Phones.select()
    data = [phone.__dict__["__data__"] for phone in query]
    return data
# query string for data
@app.get("/phone")
async def select_phone(name: str = Query(None), company: str = None):
    if name and company:
        query = Phones.select().where( (Phones.name == name) & (Phones.company == company) )
        data = [phone.__dict__["__data__"] for phone in query]
        return data
    elif name:
        query = Phones.select().where( (Phones.name == name) )
        data = [phone.__dict__["__data__"] for phone in query]
        return data
    elif company:
        query = Phones.select().where( (Phones.company == company) )
        data = [phone.__dict__["__data__"] for phone in query]
        return data
# Make a phone item
class PhoneItem(BaseModel):
    ID: int
    company: str
    name: str
# For making updates to the phone
class PhoneUpdate(BaseModel):
    current_name: str
    company: str
    name: str

@app.post('/phone')
async def add_phone(phone: PhoneItem):
    Phones.insert({
        Phones.ID: phone.ID,
        Phones.company: phone.company,
        Phones.name: phone.name
    }).execute()
    return {'Message': 'Phone entry added successfully!'}

@app.put('/phone')
async def edit_phone(phone: PhoneUpdate):
    if len(phone.company) >= 1 and len(phone.name) >= 1:
        Phones.update({Phones.company: phone.company, 
        Phones.name: phone.name}).where(Phones.name == phone.current_name).execute()
    elif len(phone.company) >= 1 and len(phone.name) < 1:
        Phones.update({Phones.company: phone.company,}).where(
        Phones.name == phone.current_name).execute()
    elif len(phone.company) < 1 and len(phone.name) >= 1:
        Phones.update({Phones.name: phone.name}).where(
            Phones.name == phone.current_name).execute()
    return {'Message': 'Updated phone entry!'}

@app.delete("/phone")
async def delete_phone(name: str = Query(None), company: str = Query(None)):
    pass