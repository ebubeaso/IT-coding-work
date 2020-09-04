#! /usr/bin/env python
""" This Mininet script will make two router nodes, using what I have
learned from the first router topology that I have made."""
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
		super( RouterNode, self ).terminate()

#Now to build the topology
class TwoRouters( Topo ):
	def build( self, **opts ):
		#making my two router nodes and I will connect them
		router1 = self.addNode('r1', cls=RouterNode, ip='10.0.100.1/25')
		router2 = self.addNode('r2', cls=RouterNode, ip='10.0.200.1/25')
		self.addLink(router1, router2, intfName1='r1-eth0',
						intfName2='r2-eth0')
		#add the two switches and the links
		S1, S2 = [self.addSwitch( s ) for s in ('s1', 's2') ]
		self.addLink(S1, router1, intfName2='r1-eth1',
				params2={'ip':'10.0.100.1/25'})
		self.addLink(S2, router2, intfName2='r2-eth1',
				params2={'ip':'10.0.200.1/25'})
		#add in some hosts and add in the links
		for h in range(3):
			host = self.addHost('h%s' % (h+1),
				ip='10.0.100.'+str(h+2)+'/25',
				defaultRoute='via 10.0.100.1')
			self.addLink(S1,host)
		for h in range(3):
			host = self.addHost('h%s' % (h+4),
				ip='10.0.200.'+str(h+2)+'/25',
				defaultRoute='via 10.0.200.1')
			self.addLink(S2,host)

def run():
	topos = TwoRouters()
	net = Mininet(topo=topos)
	net.start()
	r1 = net['r1']
	r2 = net['r2']
	r1.cmd('ifconfig r1-eth0 192.168.0.1/29')
	r2.cmd('ifconfig r2-eth0 192.168.0.2/29')
	r2.cmd('ip route add 10.0.100.0/25 via 192.168.0.1 dev r2-eth0')
	r1.cmd('ip route add 10.0.200.0/25 via 192.168.0.2 dev r1-eth0')
	CLI(net)

if __name__ == '__main__':
	setLogLevel( 'info' )
	run()
