package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// structure the data
type Preferences struct {
	id      int64  `json:"id"`
	CarType string `json:"CarType"`
	Likes   int64  `json:"Likes"`
}

// queries data from the database
func queryData() ([]Preferences, error) {
	// initialize the variable to return
	var preferences = []Preferences{
		{id: 34997, CarType: "Bikes", Likes: 679},
		{id: 37423, CarType: "LuxuryCars", Likes: 700},
		{id: 38881, CarType: "SUVs", Likes: 323},
		{id: 45020, CarType: "LowRiders", Likes: 287},
		{id: 48194, CarType: "Trucks", Likes: 207},
		{id: 53650, CarType: "Exotics", Likes: 956},
		{id: 72145, CarType: "Tuners", Likes: 887},
		{id: 89102, CarType: "MuscleCars", Likes: 841},
	}
	return preferences, nil
}
func getData(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		result, err := queryData()
		if err == nil {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(result)
		}
	}
}

// setup the backend server
func handleRequests() {
	http.HandleFunc("/cars", getData)
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)
	fmt.Println("The Golang App Server is listening on port 80..")
	// run the web server, ensuring no errors happen
	err := http.ListenAndServe(":80", nil)
	if err != nil {
		log.Fatal(err)
	}
}
func main() {
	handleRequests()
}
