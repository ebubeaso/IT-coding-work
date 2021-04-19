#! /usr/bin/env python

"""
This separate Python file is meant to setup the SQLAlchemy Models for the application
"""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Make the Database models
class CarData(db.Model):
    __tablename__ = "LuxuryCars"
    id = db.Column(db.Integer, primary_key=True)
    BrandName = db.Column(db.Text)
    ModelName = db.Column(db.Text)
    Year = db.Column(db.Integer)
    isAutomatic = db.Column(db.Text)

    def __init__(self, _id, brand, model, year, automatic):
        self.id = _id
        self.BrandName = brand
        self.ModelName = model
        self.Year = year
        self.isAutomatic = automatic

    def jsonize(self):
        return {
            "id": self.id,
            "BrandName": self.BrandName,
            "ModelName": self.ModelName,
            "Year": self.Year,
            "IsAutomatic": self.isAutomatic
        }

class Accounts(db.Model):
    __bind_key__ = "accounts"
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)
    recover_key = db.Column(db.Integer)

    def __init__(self, _id, username, password, recover_key):
        self.id = _id
        self.username = username
        self.password = password
        self.recovery = recover_key

    # make the SQLAlchemy object JSON serialzable for the web
    def jsonize(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password
        }
    @classmethod
    # Searches for the username in Users database (for logging in & account management)
    def search_username(cls, username):
        result = cls.query.filter_by(username=username).first()
        return result

    @classmethod
    # Searches for a user's unique ID in Users database (for logging in & account management)
    def search_id(cls, _id):
        result = cls.query.filter_by(id=_id).first()
        return result
    
    @classmethod
    # Searches for the recovery code of the user (for password recovery)
    def search_code(cls, recovery):
        result = cls.query.filter_by(recover_key=recovery).first()
        return result

