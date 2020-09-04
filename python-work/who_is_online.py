#! /usr/bin/env python
"""This Python script is made to scan for connected devics on the 
network. This uses the same code that I have used before to scan the
network but this time, it will tell you who is on the network. Please
only do this at the comfort of your own home and not soemwhere public."""
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
			if host == '10.0.0.208':
				print("Ebube's New iPhone is on the network!", host)
			elif host =='10.0.0.18':
				print("Ebube's laptop is on the network!!")
			
if __name__ == "__main__":
	net = Network()
	net.scanner()	

