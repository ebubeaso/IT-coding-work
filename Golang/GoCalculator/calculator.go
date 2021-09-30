package main

/*
This Go file will be used to run a simple calculator application to practice
using the math components of Go
*/
import "fmt"

// Addition function
func addition(num1, num2 int) int {
	var result int = num1 + num2
	return result
}

// Subtraction
func subtraction(num1, num2 int) int {
	var result int = num1 - num2
	return result
}

// Multiplication
func multiplication(num1, num2 int) int {
	var result int = num1 * num2
	return result
}

// Division
func division(num1, num2 int) int {
	var result int = num1 / num2
	return result
}

// The main function
func main() {
	fmt.Println("Welcome to the Simple Calculator made with Go!")
	fmt.Println("I have made this to get better practice with Golang")
	fmt.Println("First, enter in the first number: ")
	var firstNumber int
	fmt.Scanln(&firstNumber)

	fmt.Println("Enter in the operator to use (+, -, *, /): ")
	var operator string
	fmt.Scanln(&operator)

	fmt.Println("Enter in the second number: ")
	var secondNumber int
	fmt.Scanln(&secondNumber)
	// Now to use a switch statement
	switch operator {
	case "+":
		var add int = addition(firstNumber, secondNumber)
		fmt.Println("You have chosen to add these numbers, the answer is:")
		fmt.Println(add)
	case "-":
		var subtract int = subtraction(firstNumber, secondNumber)
		fmt.Println("You have chosen to subtract these numbers, the answer is:")
		fmt.Println(subtract)
	case "*":
		var multiply int = multiplication(firstNumber, secondNumber)
		fmt.Println("You have chosen to multiply these numbers, the answer is:")
		fmt.Println(multiply)
	case "/":
		if secondNumber != 0 {
			var divide int = division(firstNumber, secondNumber)
			fmt.Println("You have chosen to divide these numbers, the answer is:")
			fmt.Println(divide)
		} else {
			fmt.Println("You cannot divide by 0")
		}
	default:
		fmt.Println("Please use an Operator like (+, -, *, /)")
	}
}
