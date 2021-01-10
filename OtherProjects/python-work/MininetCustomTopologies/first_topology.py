"""This is my first custom topology for Mininet to run on raspberry pi.
This will be a simple one to test out"""
from mininet.topo import Topo
class RasPiFirstTopo(Topo):
    def __init__(self):
        Topo.__init__(self)
        #making the hosts
        host1 = self.addHost('h1')
        host2 = self.addHost('h2')
        host3 = self.addHost('h3')
        host4 = self.addHost('h4')
        #add in the switch
        S1 = self.addSwitch('s1')
        #link altogether
        self.addLink(host1, S1)
        self.addLink(host2, S1)
        self.addLink(host3, S1)
        self.addLink(host4, S1)
topos = { 'firstrpitopo': (lambda: RasPiFirstTopo() ) }
