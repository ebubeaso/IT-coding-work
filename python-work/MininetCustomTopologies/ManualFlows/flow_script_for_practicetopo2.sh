#! /bin/bash
sh ovs-vsctl set bridge s1 protocols=OpenFlow13
sh ovs-vsctl set bridge s2 protocols=OpenFlow13
sh ovs-ofctl -O OpenFlow13 del-flows s1
sh ovs-ofctl -O OpenFlow13 del-flows s2

sh ovs-ofctl -O OpenFlow13 add-flow s1 priority=700,ip,nw_src=192.168.27.22,nw_dst=172.30.48.184,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s1 priority=700,ip,nw_src=192.168.27.22,nw_dst=172.30.48.203,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s1 priority=700,ip,nw_src=172.30.48.184,nw_dst=192.168.27.22,actions=output:1
sh ovs-ofctl -O OpenFlow13 add-flow s1 priority=700,ip,nw_src=172.30.48.203,nw_dst=192.168.27.22,actions=output:1


sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=192.168.27.22,nw_dst=172.30.48.184,actions=output:1
sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=192.168.27.22,nw_dst=172.30.48.203,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=172.30.48.184,nw_dst=192.168.27.22,actions=output:3
sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=172.30.48.203,nw_dst=192.168.27.22,actions=output:3
sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=172.30.48.184,nw_dst=172.30.48.203,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s2 priority=700,ip,nw_src=172.30.48.203,nw_dst=172.30.48.184,actions=output:1

sh ovs-ofctl -O OpenFlow13 add-flow s2 arp,nw_dst=192.168.27.22,actions=output:3
sh ovs-ofctl -O OpenFlow13 add-flow s2 arp,nw_dst=172.30.48.203,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s2 arp,nw_dst=172.30.48.184,actions=output:1

sh ovs-ofctl -O OpenFlow13 add-flow s1 arp,nw_dst=192.168.27.22,actions=output:1
sh ovs-ofctl -O OpenFlow13 add-flow s1 arp,nw_dst=172.30.48.184,actions=output:2
sh ovs-ofctl -O OpenFlow13 add-flow s1 arp,nw_dst=172.30.48.203,actions=output:2