#!/usr/bin/env python
"""This is my first router topology in my Raspberry Pi. I am just going to
make one router with three interfaces, so the router will connect to three
different switches, and I will make 3 hosts connected to each switch"""

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import Node
from mininet.log import setLogLevel, info
from mininet.cli import CLI

class RouterNode(Node):
    """This makes a node into a router with IPv4 forwarding on. This will
allow tthe node to forward packets to different networks """
    def config(self, **params):
        super(RouterNode, self).config(**params)
        # Enable forwarding on the router
        self.cmd('sysctl net.ipv4.ip_forward=1')

class NetworkTopo(Topo):
    """This will build the network topology for me to look at"""
    def build(self, **_opts):
        #make the router node from the router class
        router = self.addNode('r1', cls=RouterNode, ip='192.168.10.1/27')
        #using a loop to add switches
        S1, S2, S3 = [ self.addSwitch(s) for s in ('s1', 's2', 's3') ]
        #putting together the links
        self.addLink(S1, router, intfName2='r1-eth1',
			params2={'ip':'192.168.10.1/27'})
        self.addLink(S2, router, intfName2='ri-eth2',
			params2={'ip':'192.168.10.33/27'})
        self.addLink(S3, router, intfName2='r1-eth3',
			params2={'ip':'192.168.10.65/27'})
	#add in the hosts
	#on eth1
        host1 = self.addHost('h1', ip='192.168.10.2/27',
				defaultRoute='via 192.168.10.1')
        host2 = self.addHost('h2', ip='192.168.10.3/27',
				defaultRoute='via 192.168.10.1')
        host3 = self.addHost('h3', ip='192.168.10.14/27',
				defaultRoute='via 192.168.10.1')
	#on eth2
        host4 = self.addHost('h4', ip='192.168.10.34/27',
                                defaultRoute='via 192.168.10.33')
        host5 = self.addHost('h5', ip='192.168.10.41/27',
                                defaultRoute='via 192.168.10.33')
        host6 = self.addHost('h6', ip='192.168.10.50/27',
                                defaultRoute='via 192.168.10.33')
	#on eth3
        host7 = self.addHost('h7', ip='192.168.10.67/27',
                                defaultRoute='via 192.168.10.65')
        host8 = self.addHost('h8', ip='192.168.10.72/27',
                                defaultRoute='via 192.168.10.65')
        host9 = self.addHost('h9', ip='192.168.10.81/27',
                                defaultRoute='via 192.168.10.65')
	#putting it altogether
	for h1, s1 in [(host1, S1), (host2, S1), (host3, S1)]:
	    self.addLink(h1, s1)
	for h2, s2 in [(host4, S2), (host5, S2), (host6, S2)]:
	    self.addLink(h2, s2)
	for h3, s3 in [(host7, S3), (host8, S3), (host9, S3)]:
	    self.addLink(h3, s3)

def run():
    topos = NetworkTopo()
    net = Mininet(topo=topos)
    net.start()
    CLI(net)

if __name__ == '__main__':
    setLogLevel( 'info' )
    run()
