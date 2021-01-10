#! /usr/bin/env python
"""This will better off work with Python 2.7 This topology will make
a custom mininet topology with an encrypted connection between the 
switch and the controller. This is to help ensure best security practices.
It will consist of two switches and six hosts."""
from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import Controller, RemoteController
from mininet.cli import CLI
from mininet.log import setLogLevel, info

class SSLTopo(Topo):
	def build(self, **opts):
		#add in the switches
		s1, s2 = [self.addSwitch(s) for s in ('s1', 's2')]
		self.addLink(s1, s2)
		#add in the hosts and the links
		for h in range(3):
			host = self.addHost('h%s' % (h+1))
			self.addLink(s1, host)
		for h in range(3):
			host = self.addHost('h%s' % (h+3))
			self.addLink(s2, host)
			
def run():
	#add in the network controller
	topos = SSLTopo()
	net = Mininet(topo=topos, controller=RemoteController)
	
	#start the topology
	net.start()
	#enable openflow and the ssl connection
	s1 = net['s1']
	s2 = net['s2']
	CLI( net, script='./ManualFlows/setSSL.sh' )
	CLI( net )
	net.stop()
    
if __name__ == '__main__':
	setLogLevel( 'info' )
	run()
