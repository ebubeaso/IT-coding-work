#! /usr/bin/env python
"""
This is a Python script that is used to help generate a password for a user
account when setting up a new user. It uses the modules optparse that gives
you command options, like setting up a password length, set up verbosity, and
if you would like to have a special character in them. It will also setup a 12
character password by default
"""
import hashlib
from optparse import OptionParser
import time
import random
import sys
# make the command options
parser = OptionParser()
parser.add_option("-l", "--length", dest="length",
        type="int", default=12,
        help="Specify how long you want your password to be (default is 12 characters)")
parser.add_option("-v", "--verbose", dest="verbose",
        help="Get more verbose output on the screen")
parser.add_option("-b", "--basic", action="store_true", dest="simple_pass",
        default=False,
        help="Set up a basic password to use (8 characters long, all letters, 1 number, no special characters)")
parser.add_option("--advanced", action="store_true", dest="advanced",
        default=False, help="Set up an advanced password to use, must specify a length longer than 12 characters")
(options, args) = parser.parse_args()

# make a default password
if options.simple_pass == False and options.advanced == False:
    name = input("Enter a name: ")
    byte_name = str.encode(name)
    m = hashlib.sha256()
    m.update(byte_name)
    if options.length:
        password = m.hexdigest()[:options.length]
    else:
        password = m.hexdigest()[:12] #since the default password would be 12 characters long
    print("Here is your generated password:")
    print("")
    print(f"Password: {password}")
# make a basic password (8 characters, all letters, 1 number)
elif options.simple_pass == True and options.advanced == False:
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    numbers = '0123456789'
    password = ""
    for i in range(7):
        password += random.choice(alphabet)
    password += random.choice(numbers)
    print("Here is your basic password, use at your own risk")
    print()
    print(f"Password: {password}")
# make an advanced password
else:
    if options.length and options.length > 12:
        alphabet_caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        special_chars = '!?@#$%^&_*~'
        first_name = input("Enter the first name: ")
        last_name = input("Enter the last name: ")
        byte_name = str.encode(first_name+last_name)
        text = hashlib.sha512()
        text.update(byte_name)
        password = random.choice(alphabet_caps) + text.hexdigest()[1:options.length-1]
        password += random.choice(special_chars)
        print("Here is your advanced password:")
        print('')
        print(f"Password (advanced): {password}")
    else:
        print("Script failed!")
        print()
        print("Reason:")
        print("In order to use the advanced feature, please specify a character length longer than 12 characters")
        sys.exit()
