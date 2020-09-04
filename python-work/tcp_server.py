#! /usr/bin/env python
"""This is a test tcp server to practice using sockets in Python"""
import socket

def tcpServer():
    #making the host and port for the server
    host = '127.0.0.1'
    port = 5050

    #making the socket and binding the host and port together
    s = socket.socket()
    s.bind((host, port)) #uses a tuple

    #listening for a connection and accepting it when found
    s.listen(1)
    c, addr = s.accept() #c is for connection, addr is for the address
    print("Connection from: " + str(addr))

    #getting data between client and server, talk to client
    while True:
        #receieve the data in a number of bytes
        data = c.recv(1024)
        if not data:
            break #will run this if statement if client ends the connection
        print("from connected user: " + str(data))
        data = str(data).upper()
        print("Sending: " + str(data))
        c.send(bytes(data, 'utf-8')) #sends data to the client
    c.close() #closes connection after everything is done

if __name__ == "__main__":
    tcpServer()
