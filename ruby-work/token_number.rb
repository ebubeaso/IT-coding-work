#! /usrbin/ruby
=begin
This Ruby script was made to generate a random token in Ruby. It will
generate a random 10-digit number that will serve as a form of 
authentication to access resources in the future.
=end

def token
	puts "Generating token, please wait.."
	sleep 2
	n = rand(1111111111..9999999999)
	puts 'Here is your new token!'
	sleep 1.5
	puts ''
	puts n
end

puts 'Enter your username:'
user = gets.chomp
puts 'Enter your password:'
password = gets.chomp

token() if user == 'ebube' and password == 'Pierre!'
