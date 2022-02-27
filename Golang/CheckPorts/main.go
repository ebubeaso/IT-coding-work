package main

import "port-connection/port_check"

// This is the main component that will be running the port checker to see if it is open
func main() {
	port_check.CheckPortConnection("gns3.aso.net", "22")
}
