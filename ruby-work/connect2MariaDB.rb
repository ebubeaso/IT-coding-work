#! /usr/bin/ruby
=begin
This Ruby script is made to connect to the database running on my
Docker container. Let's hope that it works!! All this will do is run a
select all statement from the table that you specify from the database 
that you also specify to use in MariaDB.
=end

require 'mysql2'
puts "Enter the database name:"
db = gets.chomp
puts "Enter the table that you would like to look at: "
table = gets.chomp
puts "Enter the password:"
passwd = gets.chomp
client = Mysql2::Client.new(:host => "172.17.0.2", :username => "ebube", 
:password => passwd, :database => db)

#run a simple select statement
results = client.query("SELECT * from #{table}")
#iteration to get the results
results.each do |row|
	puts row
end
