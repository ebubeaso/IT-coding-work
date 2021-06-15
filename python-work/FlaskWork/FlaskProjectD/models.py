from db import db
"""
This file is where I will be making my database model
"""

class Exotic(db.Model):
    __tablename__ = "Exotics"
    _id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.Text, nullable=False)
    model = db.Column(db.Text, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    automatic = db.Column(db.String(5), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    topSpeed = db.Column(db.Integer, nullable=False)

    def __init__(self, _id, brand, model, year, automatic, price, topSpeed):
        self.id = _id
        self.brand = brand
        self.model = model
        self.year = year
        self.automatic = automatic
        self.price = price
        self.topSpeed = topSpeed

    def jsonize(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "model": self.model,
            "year": self.year,
            "automatic": self.automatic,
            "price": self.price,
            "top speed": self.topSpeed
        }