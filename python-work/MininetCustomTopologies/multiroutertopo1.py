#! /usr/bin/env python
""""This topology is going to use three routers. I made this
to get more used to making more advanced Mininet topologies. This
topology is based off of tworouters.py, where I am essentially doing
the same thing, but only this time I am making three routers instead
of two routers as well as multiple hosts. The routers 2 and 3 connected 
to router 1. In addition, routers 2 and 3 have one network switch each that is 
connected to them, with six virtual hosts connected to each switch."""
#Borrowing the modules and RouterNode class from my tworouters.py script
from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import Node
from mininet.log import setLogLevel, info
from mininet.cli import CLI

class RouterNode(Node):
	def config(self, **params):
		super(RouterNode, self).config(**params)
		#Enable forwarding on the router
		self.cmd('sysctl net.ipv4.ip_forward=1')
	def terminate(self):
		self.cmd('sysctl net.ipv4.ip_forward=0')
		super(RouterNode, self).terminate()

#This class represents the actual topology that I am going to make
class Topology(Topo):
	def build(self, **opts):
		#adding in the router nodes as well as the links
		router1 = self.addNode('r1', cls=RouterNode, ip='10.100.100.1/24')
		router2 = self.addNode('r2', cls=RouterNode, ip='10.100.150.1/24')
		router3 = self.addNode('r3', cls=RouterNode, ip='10.100.200.1/24')
		self.addLink(router1, router2, intfName1='r1-eth0',
										intfName2='r2-eth0')
		self.addLink(router1, router3, intfName1='r1-eth1',
										intfName2='r3-eth0')
		
		#add in the switches and the links
		switch1, switch2 = [self.addSwitch(s) for s in ('s1', 's2')]
		self.addLink(switch1, router2, intfName2='r2-eth1',
					params2={'ip':'10.100.150.1/24'})
		self.addLink(switch2, router3, intfName2='r3-eth1',
					params2={'ip':'10.100.200.1/24'})
		
		#add the hosts and the links to each switch
		for h in range(6):
			host = self.addHost('h%s' % (h+1),
				ip='10.100.150.'+str(h+2)+'/24',
				defaultRoute='via 10.100.150.1')
			self.addLink(switch1, host)
		for h in range(6):
			host = self.addHost('h%s' % (h+7),
				ip='10.100.200.'+str(h+2)+'/24',
				defaultRoute='via 10.100.200.1')
			self.addLink(switch2, host)

#now to run everything as well as add routing rules to router nodes
def run():
	#start up the topology
	topos = Topology()
	net = Mininet(topo=topos)
	net.start()
	
	#get the router nodes
	r1 = net['r1']
	r2 = net['r2']
	r3 = net['r3']
	
	#giving IP addresses to the router interfaces
	r1.cmd('ifconfig r1-eth0 12.10.0.1/30')
	r1.cmd('ifconfig r1-eth1 143.20.0.1/30')
	r2.cmd('ifconfig r2-eth0 12.10.0.2/30')
	r3.cmd('ifconfig r3-eth0 143.20.0.2/30')
	
	#setting up the static routing
	#r2 can reach r3
	r2.cmd('ip route add 143.20.0.0/30 via 12.10.0.1 dev r2-eth0')
	
	#r1 can reach the 10.100.150.0 network
	r1.cmd('ip route add 10.100.150.0/24 via 12.10.0.2 dev r1-eth0')
	
	#lets r3 reach r2
	r3.cmd('ip route add 12.10.0.0/30 via 143.20.0.1 dev r3-eth0')
	
	#r1 can reach the 10.100.200.0 network
	r1.cmd('ip route add 10.100.200.0/24 via 143.20.0.2 dev r1-eth1')
	
	#lets the hosts on 10.100.150.0 network reach 10.100.200.0 network
	r2.cmd('ip route add 10.100.200.0/24 via 12.10.0.1')
	
	#lets the hosts on 10.100.200.0 network reach 10.100.150.0 network
	r3.cmd('ip route add 10.100.150.0/24 via 143.20.0.1')
	CLI(net)

if __name__ == "__main__":
	setLogLevel( 'info' )
	run()
