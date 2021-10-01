package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/ssh/terminal"
)

// structure the mariadb data
type Preferences struct {
	id      int64
	CarType string
	Likes   int64
}

// This function queries data from the Cars Database
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

func main() {
	// Get the db username
	fmt.Println("Enter in the username of the MariaDB user: ")
	var username string
	fmt.Scanln(&username)
	// Get the db password
	fmt.Println("Enter in the password of the MariaDB user: ")
	bytePassword, err := terminal.ReadPassword(0)
	if err != nil {
		fmt.Println("You did not enter a password")
	}
	password := string(bytePassword)
	// setup the database configuration
	dbConfig := mysql.Config{
		User:                 username,
		Passwd:               password,
		Net:                  "tcp",
		Addr:                 "127.0.0.1:33606",
		DBName:               "Cars",
		AllowNativePasswords: true,
	}
	db, err := sql.Open("mysql", dbConfig.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("We are now connected to the database!")
	result, error := queryData(db)
	if error == nil {
		fmt.Println("Here is the result of the database query:")
		fmt.Println(result)
	} else {
		fmt.Println("You received an error trying to query the data")
	}
}
