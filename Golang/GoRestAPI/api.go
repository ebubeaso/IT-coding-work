package main

import (
	"fmt"
	"net/http"
)

func theData(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		fmt.Fprintln(w, "You have made a POST request!!")
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
