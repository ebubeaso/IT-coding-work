#! /usr/bin/env python
"""
I made this simple Python script to create a key using Fernet for encryption and decryption of data
"""
from cryptography.fernet import Fernet
key = Fernet.generate_key()
print("The key has been made!!")
keyfile = input("Enter in the absolute path that you would save this key to: ")
with open (keyfile, 'wb') as f:
	f.write(key)
print(f"All done! Your new Fernet key is stored at {keyfile}")
