#! /usr/bin/ruby
=begin
This is a small script to run system commands on ruby
=end

puts "Enter in a command to run:"
command = gets
#run the command in system()
system(command.to_s)
