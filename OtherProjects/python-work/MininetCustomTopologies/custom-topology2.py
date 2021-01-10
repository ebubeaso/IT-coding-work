
"""
This is another custom topology that I decided to make. It will have
3 switches and 10 hosts. The first switch will have 3 hosts, as well
as the second switch, but the third switch will have 4 hosts"""
from mininet.topo import Topo

class CustomTopo( Topo ):
	def __init__(self):
		Topo.__init__(self)
		#add in the switches
		s1, s2, s3 = [self.addSwitch(s) for s in ('s1', 's2', 's3')]
		self.addLink(s1, s2)
		self.addLink(s2, s3)
		#add the hosts
		for h in range(3):
			host = self.addHost('h' + str(h+1))
			self.addLink(s1, host)
		for h in range(3):
			host = self.addHost('h' + str(h+4))
			self.addLink(s2, host)
		for h in range(4):
			host = self.addHost('h' + str(h+7))
			self.addLink(s3, host)

topos = {'customtopo2': (lambda: CustomTopo() )}
