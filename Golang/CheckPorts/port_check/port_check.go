package port_check

import (
	"fmt"
	"log"
	"net"
	"time"
)

func CheckPortConnection(host string, port string) {
	/**
	This function will be used to check if it is possible to connect to a
	remote host given a specified port number.

	Parameters:
	- host (the remote host to connect to)
	- port (the port to try and connect with)
	*/
	// set the connection timeout (represented in nanoseconds, MANDATORY)
	var timeout time.Duration = 10000000000 // 10 billion nanoseconds = 10 seconds
	// try the connection
	connection, err := net.DialTimeout("tcp", net.JoinHostPort(host, port), timeout)
	// if the connection fails
	if err != nil {
		log.Fatal("Could not connect, here is why:\n", err)
	}
	// if the connection passes
	if connection != nil {
		// close the connection and let user know they can connect to host by that port
		defer connection.Close()
		fmt.Println("Port " + port + " is open on the host " + host)
	}
}
