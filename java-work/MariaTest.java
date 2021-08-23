import java.sql.Connection;
import java.sql.*;
import java.util.Scanner;
/*
This is a test Java file that I made to test out the connectivity to one of my 
databases. I am making it to practice more with Java and to get more comfortable using
this programming language to make future projects.

This program simply connects to a database server of mine that has a database named "Cars"
and it pulls the data from the Exotics table. However, you would have to specify the password
to use this. Feel free to change the database conenction string to fit your username, database
and the table that you are trying to query, as this file only runs a SELECT statement
 */
public class MariaTest {    
    public static void main( String[] args ) {
        // set up the database parameters
        System.out.println("Hello! This is a test Java file to test a database connection");
        System.out.println("It will query the Exotics table running in my cars database.");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter in the db password for asoebube: ");
        String passwd = input.nextLine();
        String dbUrl = "jdbc:mariadb://localhost:33606/Cars?user=asoebube&password="+passwd;
        // connect to the database
        input.close();
        try {
            Connection connect = DriverManager.getConnection(dbUrl);
            System.out.println( "\nYou have successfully connected to the database!");
            // make the sql query
            Statement sqlQuery = connect.createStatement();
            // We will be pulling from the exotics database
            ResultSet result = sqlQuery.executeQuery("select * from Exotics;");
            // iterate through the result set to get the information
            System.out.println("\nHere is the data:");
            while (result.next()) {
                int id = result.getInt("id");
                String brand = result.getString("brand");
                String model = result.getString("model");
                int year = result.getInt("year");
                String automatic = result.getString("automatic");
                int price = result.getInt("price");
                int topSpeed = result.getInt("topSpeed");
                System.out.format("%s, %s, %s, %s, %s, %s, %s\n", id, brand, model, year,
                automatic, price, topSpeed);
            }
            connect.close();
        } catch(Exception e) {
            e.printStackTrace();
        } 
    }
}
