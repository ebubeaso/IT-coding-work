// This is my first Go project. Where I make my own custom REST API with Go
package main

// setup my imports
import (
	"fmt"
	"math/rand"
	"net/http"
)

// setup the dummy data
type cars struct {
	ID       int    `json:"id"`
	Brand    string `json:"brand"`
	Model    string `json:"model"`
	Year     int    `json:"year"`
	TopSpeed string `json:"topspeed"`
}

var luxuryCars = []cars{
	{ID: rand.Intn(999999), Brand: "Mercedes Benz", Model: "E500",
		Year: 2017, TopSpeed: "191 mph"},
	{ID: rand.Intn(999999), Brand: "Cadillac", Model: "XTS", Year: 2015,
		TopSpeed: "174 mph"},
	{ID: rand.Intn(999999), Brand: "BMW", Model: "M5", Year: 2020,
		TopSpeed: "186 mph"},
	{ID: rand.Intn(999999), Brand: "Mercedes Benz", Model: "CLA 250",
		Year: 2020, TopSpeed: "183 mph"},
}

func allCars(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		fmt.Fprintln(w, "This is a post request")
	} else {
		fmt.Fprintln(w, luxuryCars)
	}
}
func handleRequests() {
	http.HandleFunc("/", allCars)
	http.ListenAndServe(":9900", nil)
}
func main() {
	fmt.Println("The HTTP server is listening on port 9900")
	handleRequests()
}
