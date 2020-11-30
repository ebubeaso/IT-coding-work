"""This has all my SQLAlchemy DB models"""
from db import db
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
    
    # Needed to serialize the object data into JSON format
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }
    
    #class methods for handling the usernames and passwords
    @classmethod
    def find_username(cls, username):
        """Returns the row with the given username if in the database
            or None if not in database"""
        the_query = cls.query.filter_by(username=username).first()
        return the_query
    
    @classmethod
    def find_by_id(cls, _id):
        """Returns the row with the given id if in the database
            or None if not in database"""
        the_query = cls.query.filter_by(id=_id).first()
        return the_query

# ** End of User models **

# ** making the Notes model **
class TheNotes(db.Model):
    __tablename__ = 'Notes'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    name = db.Column(db.Text)
    note = db.Column(db.Text)

    def __init__(self, _id, date, name, note):
        self.id = _id
        self.date = date
        self.name = name
        self.note = note

    #Serialize the data into JSON format
    def jsonize(self):
        return {
            'id': self.id,
            'date': [self.date.strftime('%a %b %d %Y at %I:%M %p')],
            'name': self.name,
            'note': self.note
        }
# **end of notes model **

# ** making the password recovery code model **
class RecoveryPassword(db.Model):
    __bind_key__ = 'users'
    __tablename__ = 'RecoveryCodes'
    name = db.Column(db.Text)
    code = db.Column(db.Integer, primary_key=True)

    def __init__(self, name, code):
        self.name = name
        self.code = code

    #Serialize the data into JSON format
    def serialize_code(self):
        return {
            'name': self.name,
            'code': self.code
        }
    @classmethod
    def find_code(cls, code):
        """Returns the row that has the recovery code"""
        the_code = cls.query.filter_by(code=code).first()
        return the_code
# ** end of recovery code model **
