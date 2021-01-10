#! /usr/bin/env python
"""
This Python script is made as a way to test out a simple login. It will have a
list of tuples that has usernames and passwords in it. Someone would have to
login using the correct username or password to get the secret message onto the
console. If the credentials are incorrect, then it will say that the login
failed. This has been made as a way to practice with dictionary comprehension.
"""

def login_verifier(u, p):
    creds = [('ebube', 'pierre'), ('asoebube', 'Pierre2020!')]
    #This line right here uses dictionary comprehension
    mapping = {user[0]: user for user in creds}

    username, password = mapping[u]
    if u == username and p == password:
        print('')
        print("Here is the secret: Pumpkin Pie is way better than apple pie!!")
        print("Also, using a Raspberry Pi is so cool, I love it!!") 
    else:
        print('')
        print('Sorry, your credentials are invalid!!')


if __name__ == "__main__":
    user = input('Enter your username: ')
    passwd = input('Enter your password: ')
    login_verifier(user, passwd)