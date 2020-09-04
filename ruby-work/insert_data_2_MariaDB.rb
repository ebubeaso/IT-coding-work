#! /usr/bin/ruby

=begin
This Ruby script will insert data into a table in a given database on 
the database server that is running on my Docker container.

Parameter t: the table name to insert data into
Parameter c: the columns of the table (must be written like you would
do so in SQL, but without the parentheses)
Parameter v: the values for the table, same for parameter c
=end

def insert_data(t, c, v)
	require 'mysql2'
	puts "Enter the database name:"
	db = gets.chomp
	puts "Enter the password:"
	passwd = gets.chomp
	#connect to MariaDB
	client = Mysql2::Client.new(:host => "172.17.0.2", 
	:username => "ebube", :password => passwd, :database => db)
	
	puts "Here is the data in table #{t}:"
	results = client.query("SELECT * from #{t}")
	#iteration to get the results
	results.each do |row|
		puts row
	end
	puts "Would you like to insert data? y/n"
	choice = gets.chomp
	if choice == "y" or choice == "yes"
		the_query = client.query("INSERT INTO #{t} (#{c}) values (#{v})")
		puts "Congrats! You have inserted data into the table #{t}!!"
		#show the results in the console if successful
		puts "Here are the results..."
		the_query.each do |row|
			puts row
		end
	end
	if choice == "n" or choice == "no"
		puts "Okay sounds good, farewell!!"
	end
end

puts "Enter the table name"
table = gets.chomp
puts "Enter in the columns that are in the table"
columns = gets.chomp
puts "Enter in the values that you will like to add"
values = gets.chomp

#run the function
insert_data(table, columns, values)
