#! /usr/bin/env python
"""
This script is made to give you your age in leap years, months, days,
hours, minutes or even in seconds. This all depends on what option that
you choose that you would like to see. Keep in mind that if you choose 
seconds or minutes that you do get older every second, so the moment you
see your result you could very much be seconds older or even a minute
older!! Just keep that in mind.

Parameter age: the age of the user
Parameter choice: the option picked to see the user's age in a specific
 format of their choosing.
"""

def age_teller(age, choice):
	
	if choice.lower() == "leap year":
		result = str(int(age) / 4)
		print("Congrats, you are "+ result + " leap years old!!")
	elif choice.lower() == "months":
		result = str(int(age) * 12)
		print("Wow, you are "+ result + " months old!!")
	elif choice.lower() == "days":
		result = str(int(age) * 365)
		print("Interesting, you are or over "+ result + " days old!!")
	elif choice.lower() == "minutes":
		result = str(int(age) * (365 * 24 * 60))
		print("Look at that, you are or over "+ result + " minutes old!!")
	elif choice.lower() == "seconds":
		result = str(int(age) * (365 * 24 * 60 * 60))
		print("Look at that, you are or over "+ result + " seconds old!!")
	else:
		if choice.lower() == "year" or choice.lower() == "years":
			print("You already know your age in years, dummy!")
		else:
			print("You did not make a good choice, goodbye!")

your_age = input("Enter your age: ")
print("Enter how you want to see your age (seconds, days, leap year, etc.)")
choice = input("==> ")
age_teller(your_age, choice)
