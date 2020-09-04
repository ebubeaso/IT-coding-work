#! /usr/bin/ruby

# making a simple method that prints out your name and age

def name_and_age(name, age)
	puts "Hello! My name is #{name} and I am #{age} years old!"
end

puts "What is your name?"
your_name = gets.chomp
puts "Thanks for the info! What is your age?"
your_age = gets.chomp

name_and_age(your_name, your_age)
