#! /usr/bin/env python
"""
This is a simple encryption algorithm thst will encrypt words. It
works like this:
    - It reverses the string input
    - It takes the first character and last character and switches places
    with them.
    - Then, it will reverse the order again
    - Next, you will get the option to change the consonants to symbols
    or the vowels to symbols. If you choose the consonants, here are
    their corresponding symbols:
	- b = `, c = ~, d = !, f = #, g = ?, h = +, j = %, k = $, l = /,
	m = <, n = >, p = {, q = }, r = @, s = ;, t = |, v = :, w = &,
	x = *, z = '='
    If you choose the vowels, it switches a vowel with a random symbol:
        - a = *
        - e = @
        - i = ^
        - o = $
        - u = ~
        - y = !
    - Finally, it adds 'zXf3C' to better secure it

Parameter x: the word or phrase to encrypt
"""

import time
import sys

def encryptor(x):
	print('Encrypting, please wait....')
	time.sleep(2.5)
	#reverse the string input
	x_reversed = x[::-1]
	#swap the first and last letter
	first_char = x_reversed[0]
	last_char = x_reversed[-1]
	swapped = last_char + x_reversed[1:-1] + first_char
	#revserse the characters again
	swapped_reverse = swapped[::-1]
	result = ''
	print('Would you like to use the symbol change feature on')
	print('The consonants or the vowels?')
	print('')
	decision = input('==> ')
	if decision.lower() == 'consonant' or decision.lower() == 'consonants':
		result = change_consonants(swapped_reverse)
	elif decision.lower() == 'vowel' or decision.lower() == 'vowels':
		result = change_vowels(swapped_reverse)
	else:
		print('You did not make a choice, goodbye!')
		time.sleep(2.5)
		sys.exit()
	#print the result
	time.sleep(3.0)
	print('Here is your encrypted text!')
	time.sleep(2.5)
	print(result + 'zXf3C')
	
def change_consonants(t):
	"""
	This function helps with encrypting the consonants by 
	changing them into a random symbol. The conversion is as follows:
	- b = `, c = ~, d = !, f = #, g = ?, h = +, j = %, k = $, l = /,
	m = <, n = >, p = {, q = }, r = @, s = ;, t = |, v = :, w = &,
	x = *, z = '='
	"""
	newtext = ''
	for i in t:
		if i == 'b':
			newtext += '`'
		elif i == 'c':
			newtext += '~'
		elif i == 'd':
			newtext += '!'
		elif i == 'f':
			newtext += '#'
		elif i == 'g':
			newtext += '?'
		elif i == 'h':
			newtext += '+'
		elif i == 'j':
			newtext += '%'
		elif i == 'k':
			newtext += '$'
		elif i == 'l':
			newtext += '/'
		elif i == 'm':
			newtext += '<'
		elif i == 'n':
			newtext += '>'
		elif i == 'p':
			newtext += '{'
		elif i == 'q':
			newtext += '}'
		elif i == 'r':
			newtext += '@'
		elif i == 's':
			newtext += ';'
		elif i == 't':
			newtext += '|'
		elif i == 'v':
			newtext += ':'
		elif i == 'w':
			newtext += '&'
		elif i == 'x':
			newtext += '*'
		elif i == 'z':
			newtext += '='
		else:
			newtext += i
	return newtext
def change_vowels(t):
	"""
	This helper function is made to change the vowels to a random
	symbol for encrypting purposes. The random symbols to vowels are 
	as follows:
	- a = *, e = @, i = ^, o = $, u = ~, y = !
	"""
	#change the vowels
	newtext = ''
	for c in t:
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
	return newtext
	
if __name__ == "__main__":
	print('Enter in the text you would like to encrypt')
	the_text = input('==> ')
	encryptor(the_text)
