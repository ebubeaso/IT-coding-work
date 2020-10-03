#! /usr/bin/env python

"""
This network topology is meant to connect Mininet to the Internet
to see if the hosts can ping websites on the Web. Hopefully it goes
well! This will simply have one switch with six hosts connected to a 
controller. I am getting some inspiration from nat.py which uses NAT
to connect the Mininet topology to the Internet.
"""

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.log import setLogLevel, info
from mininet.cli import CLI

class Topology( Topo ):
	def build(self):
		#adding one switch and six hosts
		s1 = self.addSwitch('s1')
		for h in range(6):
			host = self.addHost('h%s' % (h+1))
			self.addLink(s1,host)
def run():
	topos = Topology()
	net = Mininet(topo=topos)
	#congifure NAT
	net.addNAT().configDefault()
	net.start()
	CLI(net)
if __name__ == "__main__":
	setLogLevel('info')
	run()
