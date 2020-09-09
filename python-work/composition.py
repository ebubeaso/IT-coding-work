#! /usr/bin/env python
"""
This Python script was made as a way to get more familiar with class compostion
in Python. It will also use type hinting as well to give the user a hint on the
data type to use for the classes. It will have two classes: the Dealership class
and the vehicle class. I will expand on this more in a future script but this
is to just get used to doing composition instead of inheritance in Python.
"""

#The first class, which is the dealership
class Dealership:
    def __init__(self, name: str, location: str, *cars):
        self.name = name
        self.location = location
        self.cars = cars
    def __repr__(self):
        return f"""<Dealsership Name: {self.name}, Location: {self.location}\n 
        Number of cars: {len(self.cars)}>"""
    
#making the vehicle class
class Vehicle:
    def __init__(self, brand, model, color: str, engine, price: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.engine = engine
        self.price = price

    def __str__(self):
        return f"""This car is the {self.brand} {self.model} and it costs
        ${self.price} Color: {self.color}, Engine Type: {self.engine}"""


v1 = Vehicle("Aston Martin", "DB9", "Silver", "V8", 154000)
v2 = Vehicle("Dodge", "Challenger R/T", "Orange", "V8", 71000)
v3 = Vehicle("Pagani", "Huayra", "Red", "V10", 659000)
dealer = Dealership("FastLane", "Charlotte, NC", v1, v2, v3)

for v in [v1, v2, v3]:
    print(v)
    print('')
print(dealer)