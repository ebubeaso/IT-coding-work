#! /usr/bin/env python
"""this is the client side for my tcp server script that I made"""
import socket

def main():
    #making the host and port, this is to the server
    host = '127.0.0.1'
    port = 5050

    #making a proper connection to the makeshift tcp server
    s = socket.socket() #make a new socket object
    s.connect((host, port))
    message = input("-> ")
    while message != 'q':
        #have to convert the string to bytes for the server
        s.send(bytes(message, 'utf-8'))
        data = s.recv(1024)
        print("The server's message: " + str(data))
        message = input("-> ")
    s.close()

if __name__ == "__main__":
    main()
