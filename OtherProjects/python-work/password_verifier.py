#! /usr/bin/env python

"""This Python script is made to determine if you are using a strong
password. First, it will see if your password is less than or equal to
6 characters, you wll be prompted to make the password longer. If your
password does not have any capital letters or numbers, say that your 
password is weak. If it does have a capital letter or a number, then say
that the password is fairly strong. If the password has special characters
like !, @, #, $, %, ^, &, +, *, `, ~, then say that your password is
pretty strong! It imports re to work with regular expressions for finding
capital letters.

Parameter p: the password to look at"""
import re
import time

def verifier(p):
	print('processing, please wait..')
	time.sleep(2.5)
	if len(p) <= 6:
		print('Sorry, but your password is too short!')
	else:
		capitals = re.findall('([A-Z])', p)
		#checks if password is alphanumeric and has 1 or more capital letters
		if len(capitals) > 0 or p.isalnum():
			print('It looks like you have a fairly strong password!')
			time.sleep(1.5)
			if not p.isalnum():
				print("""Your password is okay, but add numbers to make 
				it better!!""")
			elif len(capitals) == 0:
				print("""It is okay that you added numbers, but it would
				be better if you also add capital letters too!""")
		
		#looks for special characters as a bonus
		specialchars = '!, @, #, $, %, ^, &, +, *, `, ~'
		count = 0
		for i in p:
			if i in specialchars:
				if len(capitals) > 0 or p.isalnum():
					count += 1
		if count > 0:
			print('Wow you have a strong password! Great job!!')

if __name__ == '__main__':
	print('Welcome to Password Verifier!')
	time.sleep(2.0)
	print('')
	print('This script has been made to help you have a strong password')
	print('Security is important and strong passwords prevent hackers')
	print('from compromising your content.')
	time.sleep(4.0)
	print('')
	print("Let's get started!!")
	time.sleep(1.5)
	print('')
	passwd = input('Enter a password: ')
	verifier(passwd)
