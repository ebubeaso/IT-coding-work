#! /usr/bin/env python
"""
This script is meant to help me practice using classes and objects in Python.
It is an object-oriented programming language so I want to get this solid. This
script will make a Car object, along with the brand name, model, year and price
of the car object. It will also have a __str__ method to print out the
information about the car for you to look at. This will also use class
inheritance where the child classes LuxuryCars and SportsCars inherit from
Cars. I am suing the same Cars class from classes_and_objects1.py
"""

class Car:
    def __init__(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price
    
    def __str__(self):
        return f"""This is the {self.brand} {self.model} and it costs
        {self.price} to buy it!"""

class LuxuryCars(Car):
    def __init__(self, brand, model, price, color, automatic=True):
        super().__init__(brand, model, price)
        self.color = color
        self.automatic = automatic

    def __str__(self):
        if self.automatic == True:
            return f"{super().__str__()} (Color: {self.color}, Transmission: Automatic)" 
        else:
            return f"{super().__str__()} (Color: {self.color}, Transmission: Manual/Stick shift (nice))"

luxury1 = LuxuryCars('Chrysler', '300', 40000, 'black')
luxury2 = LuxuryCars('Mercedes Benz', 'E-Class', 87500,'silver', False)
print(luxury1)
print(luxury2)