package main

import (
	"fmt"
	"port-connection/port_check"
)

// This is the main component that will be running the port checker to see if it is open
func main() {
	// get the hostname and the port
	var hostname, port string
	fmt.Println("Enter the hostname or IP address of the server to connect to: ")
	fmt.Scanln(&hostname)
	fmt.Println("Enter in the port number to check: ")
	fmt.Scanln(&port)
	port_check.CheckPortConnection(hostname, port)
}
