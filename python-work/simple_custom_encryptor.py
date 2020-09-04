#! /usr/bin/env python
"""
This is a simple encryption algorithm thst will encrypt words. It
works like this:
    - It reverses the string input
    - It takes the first character and last character and switches places
    with them.
    - Then, it switches a vowel with a random symbol:
        - a = *
        - e = @
        - i = ^
        - o = $
        - u = ~
        - y = !
    - Finally, it adds 'smpcuenC' to better secure it

Parameter x: the word or phrase to encrypt
"""

import time
import sys
import optparse

def encryptor(x):
	print('Encrypting, please wait....')
	#reverse the string input
	x_reversed = x[::-1]
	#swap the first and last letter
	first_char = x_reversed[0]
	last_char = x_reversed[-1]
	swapped = last_char + x_reversed[1:-1] + first_char
	#change the vowels
	newtext = ''
	for c in swapped:
		if c == 'a':
			newtext += '*'
		elif c == 'e':
			newtext += '@'
		elif c == 'i':
			newtext += '^'
		elif c == 'o':
			newtext += '$'
		elif c == 'u':
			newtext += '~'
		elif c == 'y':
			newtext += '!'
		else:
			newtext += c
	#add in the smpcuenC to the end
	newtext += 'smpcuenC'
	#print the result
	time.sleep(3.0)
	print('Here is your encrypted text!')
	time.sleep(2.5)
	print(newtext)
	
if __name__ == "__main__":
	print('Enter in the text you would like to encrypt')
	the_text = input('==> ')
	encryptor(the_text)
