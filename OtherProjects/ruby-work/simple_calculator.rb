#! /usr/bin/env ruby
=begin
This is a simple calculator in Ruby. It is a way to practice math using
this programming language. It will add, subtract, multiply, divide and
exponentiate two numbers that you put in
=end

#the helper functions to use
def addition(a, b)
	puts a + b
end

def subtraction(a, b)
	puts a - b
end

def multiply(a, b)
	puts a * b
end

def division(a, b)
	puts a / b
end

def exponentiate(a, b)
	puts a ** b
end

#main function
def calculator()
	puts "Enter in a number:"
	number1 = gets.chomp.to_f
	puts "Enter in another number:"
	number2 = gets.chomp.to_f
	puts "Enter one of these operators to use: ( + - * / ** )"
	operator = gets.chomp
	addition(number1, number2) if operator == "+"
	subtraction(number1, number2) if operator == "-"
	multiply(number1, number2) if operator == "*"
	division(number1, number2) if operator == "/"
	exponentiate(number1, number2) if operator == "**"
end
calculator()
