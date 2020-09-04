#! usr/bin/env python
"""This script is a custom script, and the topology is as follows:
  - 4 Switches
  - 24 hosts """

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.log import setLogLevel, info
from mininet.cli import CLI

class CustomTopology( Topo ):
  def build(self):
    #making the switches
    S1,S2,S3,S4 = [self.addSwitch(s) for s in ('s1', 's2', 's3', 's4')]
    #making links between the switches
    self.addLink(S1, S2)
    self.addLink(S2, S3)
    self.addLink(S3, S4)
    self.addLink(S1, S3)
    #now to make the hosts
    for h in range(6):
      host = self.addHost('h' + str(h+1))
      self.addLink(S1, host)
    for h in range(6):
      host = self.addHost('h' + str(h+7))
      self.addLink(S2, host)
    for h in range(6):
      host = self.addHost('h' + str(h+13))
      self.addLink(S3, host)
    for h in range(6):
      host = self.addHost('h' + str(h+19))
      self.addLink(S4, host)

def run():
  topos = CustomTopology()
  net = Mininet(topo=topos)
  net.start()
  CLI(net)

if __name__ == "__main__":
  setLogLevel( 'info' )
  run()
