#! /usr/bin/env python
"""
This script is meant to help me practice using classes and objects in Python.
It is an object-oriented programming language so I want to get this solid. This
script will make a Car object, along with the brand name, model, year and price
of the car object. It will also have a __str__ method to print out the
information about the car for you to look at.
"""

class Car:
    def __init__(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price
    
    def __str__(self):
        return f"""This is the {self.brand} {self.model} and it costs
        {self.price} to buy it!"""

if __name__ == "__main__":
    b = input("Enter the brand name of a car: ")
    m = input("Enter the model name of the car: ")
    p = input("What price would you like to set it at?: ")
    car = Car(b, m, p)
    print(car)