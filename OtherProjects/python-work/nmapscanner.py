#! /usr/bin/env python
"""This Python script is made to scan for connected devics on the 
network"""
import nmap

class Network(object):
	def __init__(self):
		ip = input("Enter in the router IP: ")
		self.ip = ip
		
	def scanner(self):
		#check if user entered IP
		if len(self.ip) == 0:
			print("You did not enter an IP address!")
		else:
			network = self.ip
		print("starting scan...")
		
		#make nmap object
		n = nmap.PortScanner()
		n.scan(hosts=network, arguments='-sn')
		#save a list of the ip addresses
		the_list = [(i, n[i]['status']['state']) for i in n.all_hosts()]
		for host, stats in the_list:
			print("Device: {}".format(host))
		
			
if __name__ == "__main__":
	net = Network()
	net.scanner()	

