#! /usr/bin/env python
""" This python script makes a fake binary digit. It will take a string
of numbers, or a number which will be converted to a string. Each digit
would be evaluated individually. If the digit is less than 5, that number
becomes 0. However, if the digit is greater than or equal to 5, it will
become a 1.

Parameter n: the number to evaluate """

import time

def fake_binary(n):
	n = int2string(n)
	fakebinary = ''
	for i in n:
		integer = int(i)
		if integer < 5:
			fakebinary += '0'
		else:
			fakebinary += '1'
	print('Here is your fake binary!')
	time.sleep(2.5)
	print(fakebinary)

def int2string(n):
	"""Checks to see if the number given was already put in as a string.
	If the input is already a string, it will pass. However, it is an
	integer, it will convert the integer into a string."""
	if type(n) == str:
		return n
	elif type(n) == int:
		converted = str(n)
		return converted

if __name__ == "__main__":
	print("Enter in a number as an integer or a string:")
	number = input("=> ")
	fake_binary(number)
