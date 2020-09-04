#! /usr/bin/env python

"""This is another Mininet custom topology that I am going to make using
my new keyboard that I got in the mail! this topology will involve me
manually adding in flows to the Open vSwitch switches. There will be
two switches and three hosts: one on the left switch and the other two
on the right one. They will be in different networks where the first host
is in the 192.168.27.0/27 network and the otther two hosts are in the
172.30.48.0/20. I will use the switches to add flows once the topology
has been made. I will make a separate script that manually configure 
layer 3 flows into the OpenFlow tables on the switches"""
from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import Controller, RemoteController
from mininet.cli import CLI
from mininet.log import setLogLevel, info

class PracticeTopo(Topo):
	def build(self, **opts):
		#add in the switches 
		s1, s2 = [self.addSwitch(s) for s in ('s1', 's2')]
		#add in the hosts
		h1 = self.addHost('h1', ip='192.168.27.22/27')
		h2 = self.addHost('h2', ip='172.30.48.184/20')
		h3 = self.addHost('h3', ip='172.30.48.203/20')
		#add the links
		self.addLink(h1, s1)
		self.addLink(h2, s2)
		self.addLink(h3, s2)
		self.addLink(s1, s2)

def run():
	topos=PracticeTopo()
	net = Mininet(topo=topos, controller=RemoteController)
	net.start()
	
	#set up the routes to each hosts
	h1 = net['h1']
	h2 = net['h2']
	h3 = net['h3']
	h1.cmd('ip route add 172.30.48.0/24 dev h1-eth0')
	h2.cmd('ip route add 192.168.27.0/27 dev h2-eth0')
	h3.cmd('ip route add 192.168.27.0/27 dev h3-eth0')
	
	CLI(net, 
	script='/home/pi/Documents/MyMininetDir/ManualFlows/flow_script_for_practicetopo2.sh')
	CLI(net)
	net.stop()
	
if __name__ == "__main__":
	setLogLevel('info')
	run()

