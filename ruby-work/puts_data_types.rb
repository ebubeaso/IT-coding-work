#! /usr/bin/env ruby
=begin
This is a test on making my first Ruby script. It appears
that I can do similar things with Ruby that I can with Python, so I am
willing to give it a shot! This just prints out the data types in Ruby
that I can use. Let's get started!!! 
=end

integer = 40
puts "#{integer} is an #{integer.class}"

float = 3.564
puts "#{float} is a #{float.class}"

string = "Ebube Aso"
puts "#{string} is a #{string.class}"

simple_hash = {"name"=> "Ebube Aso", "age"=> 21, "Favorite color"=> "silver"}
simpleHash = simple_hash
puts "#{simpleHash} is a #{simpleHash.class}"
#this is an each loop to loop through the hash
simpleHash.each do |key, value|
	print " - ", key," ", value, " \n"
end

simple_array = [12, 45.78, "Tesla", [546, "King"]]
puts "#{simple_array} is a #{simple_array.class}"
#a for loop this time for the array
for x in simple_array
	print " - ", x, " \n"
end

symbol = :this_is_a_symbol
puts "#{symbol} is a #{symbol.class}"

