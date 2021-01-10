#! /usr/bin/ruby
=begin
This script is made to give you the option of using if or unless for 
control flow in Ruby. You will use if-else , if-elsif-else, or unless
on Ruby. It will be cool! 
=end

puts "Do you want to use if-else, elsif, or unless for practice?"
choice = gets.chomp

if choice == "if-else"
	puts "Enter in a number:"
	number = gets.chomp.to_i
	if number < 100
		puts "The number you entered is less than 100"
	else
		puts "The number you entered is bigger than 100!"
	end
	puts "Congrats! You used if-else control flow!"
elsif choice == "elsif"
	puts "Enter in a number:"
	number = gets.chomp.to_i
	if number < 100
		puts "The number you entered is less than 100"
	elsif number >= 100  and number < 1000
		puts "The number you entered is between 100 and 1000!"
	else
		puts "The number you entered is bigger than 1000!"
	end
	puts "Congrats! You used if-elsif-else control flow!"
elsif choice == "unless"
	puts "Enter in a number:"
	number = gets.chomp.to_i
	unless number > 100
		puts "The number you entered is less than 100"
	else
		puts "The number you put in is bigger than 100!"
	end
	puts "Congrats! You used unless control flow!"
else
	puts "You did not pick any of the choices. Goodbye!"
end
