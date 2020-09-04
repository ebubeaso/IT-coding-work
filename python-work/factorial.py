#! /usr/bin/env python
"""This is to practice using recursion in Python. This will use 
recursion to do factorial operations

Factorial: n! = n"""
def factorial(n):
	#base case
	if n <= 1:
		return 1
	#recursive case
	result = n * factorial(n-1)
	#put it altogether
	return result
    
if __name__ == "__main__":
	print('Welcome to the Python Factorial calculator!')
	print('Enter a number to use the factorial:')
	number = input('==> ')
	print(factorial(int(number)))
