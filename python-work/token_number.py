#! /usr/bin/env python
"""This is  script that is meant to generate a token for someone to use
to view a secret message. First, the user has to login with the correct
username and password and then it will make a random generated number
which will be used as a token for secure access to data"""

import random
import time
import sys

def token():
	print('Generating token..')
	time.sleep(2.0)
	number = random.randint(1000000000, 9999999999)
	print('Here is your token!')
	time.sleep(1.5)
	print('')
	print(number)


if __name__ == '__main__':
	user = input('Enter the user name: ')
	password_ = input('Enter the password: ')
	if user == 'ebube' and password_ == 'pierre':
		token()
	else:
		print('Nice try! You entered incorrect login credemtials!')
		time.sleep(1.5)
		print('Exiting the script..')
		time.sleep(1.5)
		sys.exit()
