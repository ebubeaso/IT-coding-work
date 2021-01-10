#! usr/bin/python
"""This script is a custom script, and the topology is as follows:
  - 4 Switches
  - 24 hosts (will scale down to 12 so my Raspberry Pi wireless
interface does not go down)
	- switch 1: 3 hosts
	- switch 2: 4 hosts
	- switch 3: 3 hosts
	- switch 4: 2 hosts"""

from mininet.topo import Topo
from mininet.net import Mininet
from mininet.log import setLogLevel, info
from mininet.cli import CLI

class CustomTopology( Topo ):
  def build(self):
    #making the switches
    S1, S2, S3, S4 = [self.addSwitch(s) for s in ('s1', 's2', 's3', 's4')]
    #making links between the switches
    self.addLink(S1, S2)
    self.addLink(S2, S3)
    self.addLink(S3, S4)
    #self.addLink(S1, S3)
    #now to make the hosts
    for h in range(3):
      host = self.addHost('h' + str(h+1))
      self.addLink(S1, host)
    for h in range(4):
      host = self.addHost('h' + str(h+4))
      self.addLink(S2, host)
    for h in range(3):
      host = self.addHost('h' + str(h+8))
      self.addLink(S3, host)
    for h in range(2):
      host = self.addHost('h' + str(h+11))
      self.addLink(S4, host)

def run():
  topos = CustomTopology()
  net = Mininet(topo=topos)
  net.start()
  """s1 = net['s1']
  s2 = net['s2']
  s3 = net['s3']
  s4 = net ['s4']
  
  #enable STP to prevent switching loops
  s1.cmd('ovs-vsctl set bridge s1 stp-enable=true')
  s2.cmd('ovs-vsctl set bridge s2 stp-enable=true')
  s3.cmd('ovs-vsctl set bridge s3 stp-enable=true')
  s4.cmd('ovs-vsctl set bridge s4 stp-enable=true')"""
  CLI(net)
  net.stop()

if __name__ == "__main__":
  setLogLevel( 'info' )
  run()
