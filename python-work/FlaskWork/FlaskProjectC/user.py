"""This file will handle the users that are saved in the 'TheUsers' database"""

from app import db
# ** Start of User models **

class User(db.Model):
    __bind_key__ = 'users'
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)

    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password
    
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }
    
    #class methods for handling the usernames and passwords
    @classmethod
    def find_username(cls, username):
        the_query = cls.query.filter_by(username=username).first()
        return the_query
    
    @classmethod
    def find_by_id(cls, _id):
        the_query = cls.query.filter_by(id=_id).first()
        return the_query

# ** End of User models **    