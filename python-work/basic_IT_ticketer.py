#! /usr/bin/env python
"""This script is meant to be a basic version of an IT ticketing program that
companies use to report technical issues to the IT department. This will involve
a person giving their name, the time and date of the occurence, the subject 
of the issue and then provide details in what has happened. Then, the program 
will generate the report for the user to see. It will write the ticket to a text
file, which will be formatted in a readable format.

Parameter n: the name of the person making the request
Parameter t: time and date of the occurence
parameter s: the subject of the matter
parameter d: the details of the problem"""
import os

def ticketer(n, t, s, d):
    with open('incident.txt', "w") as f:
        f.write(n)
    with open('incident.txt', "a") as file:
        file.write("\n")
        file.write(t)
        file.write("\n")
        file.write(s)
        file.write("\n")
        file.write(d)
    os.system("fmt incident.txt > ticket.txt; rm incident.txt")
    print("Your report has been generated at ticket.txt !!!")

if __name__ == "__main__":
    name = input("What is your name? : ")
    time = input("Enter the time and date of event: ")
    subject = input("What is the subject of the issue?: ")
    details = input("Provide details of what happened: ")
    ticketer(name, time, subject, details)