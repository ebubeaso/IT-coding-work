package main

import (
	"fmt"
	"net/http"
)

func theData(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		fmt.Fprintln(w, "This is a POST Request!!")
		fmt.Println(r.Body)
	case "PUT":
		fmt.Fprintln(w, "This is a PUT Request!!")
	case "DELETE":
		fmt.Fprintln(w, "You have sent a DELETE Request!")
	case "GET":
		fmt.Fprintln(w, "You have sent a GET Request")
	default:
		fmt.Fprintln(w, "You did not send a GET, POST, PUT or DELETE Request")
	}

}
func handleWebRequests() {
	// This function is used to make the web API server
	http.HandleFunc("/", theData)
	http.ListenAndServe(":9900", nil)
}
func main() {
	handleWebRequests()
}
