#! /usr/bin/env python
"""This Python script is made to get some practice with using class
composition in Python. I want to get better at using this programming language
and apparently class composition is more recommended to use than class
inheritance, especially when you are working with classes that are similar but
not necessarily in a hierarchial manner (like a book to a bookshelf or a
smartphone to a computer). This script will have an inventory of switches, 
routers and servers inside it and will let the user know how many of each item
are in the inventory."""

#######################################################################
#I WILL REMOVE THIS COMMENT ONCE I AM FULLY FINISHED IMPLEMENTING THIS#
#######################################################################

from typing import List

class Inventory:
    def __init__(self, name: str, switches, routers, servers: List[str]):
        self.name = name
        self.switches = switches
        self.routers = routers
        self.servers = servers
    def __repr__(self):
        return f"""<Inventory {self.name}> has 
        {len(self.switches)} switches, {len(self.routers)} routers, and 
        {len(self.servers)} servers recorded in the inventory"""

class Switches:
    switch_types = ("Access", "Distribution", "OpenFlow")
    def __init__(self, name, _type, ports_on):
        self.name = name
        self.type = _type
        self.ports_on = ports_on

    def __repr__(self):
        return f"""<This switch {self.name} is a {self.type} switch
         with {self.ports_on} ports active>"""
    
    #making class methods that depend on the type of switch added
    #makes a switch object with an access type
    @classmethod
    def access_type(cls, name, ports):
        return Switches(name, Switches.switch_types[0], ports)
    
    #makes a switch object with an distribution type
    @classmethod
    def distribution_type(cls, name, ports):
        return Switches(name, Switches.switch_types[1], ports)
    
    #makes a switch object with an OpenFlow type
    @classmethod
    def openflow_type(cls, name, ports):
        return Switches(name, Switches.switch_types[2], ports)


class Routers:
    def __init__(self, name):
        self.name = name
    
    def __repr__(self):
        return f"<Router: {self.name}>"

#I just used type hinting here to get the hang of it
class Servers:
    TYPES = ("Hardware Server", "Virtual Machine")
    def __init__(self, name: str, platform: str, role: str):
        self.name = name
        self.platform = platform
        self.role = role
    def __repr__(self):
        return f"<{self.name} is a {self.platform} and is used as a {self.role}>"
    
    #Class methods to determine the type of server you would like to add
    @classmethod
    def hardware(cls, name, role):
        return Servers(name, Servers.TYPES[0], role)
    @classmethod
    def virtual(cls, name, role):
        return Servers(name, Servers.TYPES[1], role)

"""Takes an object as input and then adds it to the inventory"""
def add_devices():
    pass