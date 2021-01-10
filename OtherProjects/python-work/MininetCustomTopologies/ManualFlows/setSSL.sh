#! /bin/bash
sh ovs-vsctl set bridge s1 protocols=OpenFlow13
sh ovs-vsctl set bridge s2 protocols=OpenFlow13
sh ovs-vsctl set-controller s1 ssl:127.0.0.1:6633
sh ovs-vsctl set-controller s2 ssl:127.0.0.1:6633
