package main

// This is to test out the code;
import (
	"testing"
)

func TestAddition(t *testing.T) {
	number1 := 529
	number2 := 17
	// This is the desired output
	desired := 546
	calculation := addition(number1, number2)
	if desired != calculation {
		t.Fatalf("The addition function needs to be fixed")
	}
}
func TestSubtraction(t *testing.T) {
	number1 := 89
	number2 := 63
	desired := 26
	calculation := subtraction(number1, number2)
	if desired != calculation {
		t.Fatalf("Your subtraction function needs to be fixed")
	}
}
func TestMultiplication(t *testing.T) {
	number1 := 6
	number2 := 18
	desired := 108
	calculation := multiplication(number1, number2)
	if desired != calculation {
		t.Fatalf("Your multiplication function needs to be fixed")
	}
}
func TestDivision(t *testing.T) {
	number1 := 99
	number2 := 11
	desired := 9
	calculation := division(number1, number2)
	if desired != calculation {
		t.Fatalf("Your division function needs to be fixed")
	}
}
