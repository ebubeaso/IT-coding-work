#!/usr/bin/env python
"""
This will set up an arp scan on the network
"""
import scapy.all as scapy

def arpscan(ip):
	scapy.arping(ip)
	
if __name__ == "__main__":
	print('Enter in an IP address to ARP scan:')
	ip_address = input('==> ')
	arpscan(ip_address)
