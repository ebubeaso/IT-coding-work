package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/ssh/terminal"
)

var username string
var bytePassword []byte
var password string

// structure the data
type Preferences struct {
	id      int64  `json:"id"`
	CarType string `json:"CarType"`
	Likes   int64  `json:"Likes"`
}

// queries data from the database
func queryData(database *sql.DB) ([]Preferences, error) {
	// initialize the variable to return
	var preferences []Preferences
	theRows, err := database.Query("SELECT * FROM CarPreferences")
	if err != nil {
		return nil, fmt.Errorf("We could not get the data")
	}
	defer theRows.Close()
	// Loop through the rows
	for theRows.Next() {
		var carPreference Preferences
		if err := theRows.Scan(&carPreference.id, &carPreference.CarType,
			&carPreference.Likes); err != nil {
			return nil, fmt.Errorf("Could not parse data into the Preferences struct")
		}
		preferences = append(preferences, carPreference)
	}
	return preferences, nil
}
func dbConnection() ([]Preferences, error) {
	dbConfig := mysql.Config{
		User:                 username,
		Passwd:               password,
		Net:                  "tcp",
		Addr:                 "sirius.aso.net:33606",
		DBName:               "Cars",
		AllowNativePasswords: true,
	}
	db, err := sql.Open("mysql", dbConfig.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to the database")
	data, err := queryData(db)
	if err == nil {
		return data, nil
	} else {
		return nil, err
	}
}
func getData(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		result, err := dbConnection()
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
	fmt.Println("The Golang App Server is listening on port 9900..")
	// run the web server, ensuring no errors happen
	err := http.ListenAndServe(":9900", nil)
	if err != nil {
		log.Fatal(err)
	}
}
func main() {
	// Get the db username
	fmt.Println("Enter in the username of the MariaDB user: ")
	fmt.Scanln(&username)
	// Get the db password
	fmt.Println("Enter in the password of the MariaDB user: ")
	bytePassword, err := terminal.ReadPassword(0)
	if err != nil {
		fmt.Println("You did not enter a password")
	}
	// convert from a byte to a string
	password = string(bytePassword)
	handleRequests()
}
