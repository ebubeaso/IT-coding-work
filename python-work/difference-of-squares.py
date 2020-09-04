#! /usr/bin/env python
""" This script is to essentially take the difference of two squares
from a circle. There is one big square, where the circle is an incircle
for, and a smaller square which is a circumcircle. For the bigger
square, the sides are equal to the diameter of the circle

Parameter d: the given diameter of the circle"""
import math
import time
def diff_squares(d):
	radius = d // 2
	circle_area = math.pi * (radius**2)
	print('The area of the circle is: ' + str(circle_area))
	time.sleep(2.5)
	bigsquare_area = d ** 2
	print('The area of the big square is: ' + str(bigsquare_area))
	time.sleep(2.5)
	#find area of smaller square
	#the diagonal of the smaller square = circle diameter
	#since the diagonal of a square makes two isoceles right triangles
	#the sides are s, s, s*sqrt(2)
	s = (d * math.sqrt(2)) // 2
	smallsquare_area = s ** 2
	print('The area of the small square is: ' + str(smallsquare_area))
	time.sleep(2.5)
	difference = bigsquare_area - smallsquare_area
	print('calculating the difference in squares...')
	time.sleep(2.0)
	print('The difference of squares is: ' + str(difference))
	
if __name__ == "__main__":
	print("Enter in the number you want for your circle's diameter:")
	number = input('==> ')
	diff_squares(int(number))
