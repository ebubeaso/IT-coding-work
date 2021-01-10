#! /usr/bin/ruby
=begin
This Ruby script has been made to take in a hash and then return a sorted
version of the hash. This will use a hash that has a leaderboard in a 
math tournament.
=end

#puts 'Enter in a Ruby hash that you would like to sort:'
#h = gets.chomp
leaderboard = {1 => 'Tim', 4 => 'Joseph', 5 => 'Sara', 3 => 'Morgan', 
2 => 'Eunice', 7 => 'Khumm', 8=> 'Jessica', 6 => 'Olivia'}

def sorter(h)
	result = {}
	h.keys.sort.reverse.each do |key|
		result[key] = h[key]
	end
	puts result
end

sorter(leaderboard)
