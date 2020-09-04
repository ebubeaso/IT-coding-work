"""This is me making another custom topology for fun"""

from mininet.topo import Topo

class CustomTopo(Topo):
	def __init__(self):
		Topo.__init__(self)
		#make the switches
		s1, s2, s3, s4 = [self.addSwitch(s) for s in ('s1', 's2', 's3', 's4')]
		#make the hosts
		h1, h2, h3, h4 = [self.addHost(h) for h in ('h1', 'h2', 'h3', 'h4')]
		h5, h6, h7, h8 = [self.addHost(h) for h in ('h5', 'h6', 'h7', 'h8')]
		h9, h10, h11, h12 = [self.addHost(h) for h in ('h9', 'h10', 'h11', 'h12')]
		h13, h14, h15, h16 = [self.addHost(h) for h in ('h13', 'h14', 'h5', 'h16')]
		h17, h18, h19, h20 = [self.addHost(h) for h in ('h17', 'h18', 'h19', 'h20')]
		#add all the links
		#I am making a set of hosts to connect to the different
		#switches. Each linkset link and number correspond to a switch
		linkset1 = [h1, h2, h3, h4, h5]
		linkset2 = [h6, h7, h8, h9, h10]
		linkset3 = [h11, h12, h13, h14, h15]
		linkset4 = [h16, h17, h18, h19, h20]
		for h in linkset1:
			self.addLink(h, s1)
		for h in linkset2:
			self.addLink(h, s2)
		for h in linkset3:
			self.addLink(h, s3)
		for h in linkset4:
			self.addLink(h, s4)
		self.addLink(s1, s2)
		self.addLink(s2, s3)
		self.addLink(s3, s4)

topos = {'customtopo1': (lambda: CustomTopo() )}
