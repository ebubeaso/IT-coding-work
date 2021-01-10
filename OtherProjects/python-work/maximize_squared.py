import time
import sys
"""This script will take up to three lists of numbers, and then take
the maximum number from that list. Once the script takes the max numbers
from each list, it will square them and then add them all up, returning
the sum of the max numbers of each list squared."""
def maximize_squared(x, y, z):
	max1 = max(x)
	max2 = max(y)
	max3 = max(z)
	print("Calculating, please wait..")
	result = (max1**2) + (max2**2) + (max3**2)
	time.sleep(4.0)
	print("Here is the result!!")
	print(result)
	
if __name__ == "__main__":
	print("Welcome to the maximize squared script!")
	time.sleep(2.0)
	print("You just need to enter in a set of numbers three times") 
	print("and this script will calculate the largest number in your")
	print("set of numbers and square it. Then it will add all those") 
	print("squared numbers together and get your result")
	time.sleep(8.0)
	print("Let's get started!")
	input1 = []
	input2 = []
	input3 = []
	n1 = int(input("how many integers in the first list?: "))
	for i in range(0, n1):
		number = int(input())
		input1.append(number)
	n2 = int(input("how many integers in the second list?: "))
	for i in range(0, n2):
		number = int(input())
		input2.append(number)
	n3 = int(input("how many integers in the third list?: "))
	for i in range(0, n3):
		number = int(input())
		input3.append(number)
	maximize_squared(input1, input2, input3)
