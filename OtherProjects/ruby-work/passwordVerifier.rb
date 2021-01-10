#! /usr/bin/ruby

=begin
This Ruby script has been made to verify how strong of a password you
have. If your password is less than or equal to 6 characters, it will
be written off as a weak password. If the password has at least one upper
case character or at least one number, commend the person for a having
a fairly strong password. If the password also includes a special 
character like !, @, #, $, %, ^, &, +, *, `, ~, then the password is very
strong!
=end


def verifier(password)
	if password.length <= 6
		puts 'Your password is weak sauce, for shame!'
	else
		
end
