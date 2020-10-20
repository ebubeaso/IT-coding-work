"""This file will handle the users that are saved in the 'TheUsers' database"""
from app import db, ma

class User(db.Model):
    __bind_key__ = "users"
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)

    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password

#make schema using Marshmallow
class UserSchema(ma.Schema):
    class Meta:
        model = User #the model to use

user_schema = UserSchema()