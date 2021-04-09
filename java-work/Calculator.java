// This is a simple calculator programm for Java

//import Scanner to take in input
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        // add in the first number
        Scanner input1 = new Scanner(System.in);
        System.out.println("Enter in the first number: ");
        int num1 = input1.nextInt();
        // add in the second number
        Scanner input2 = new Scanner(System.in);
        System.out.println("Enter in the second number: ");
        int num2 = input2.nextInt();
        // enter in the operator
        Scanner input3 = new Scanner(System.in);
        System.out.println("Enter in the operator: ");
        String operator = input3.nextLine();

        //run the function
        int result = calculate(num1, num2, operator);
        System.out.println(result);
    }
    static int calculate(int a, int b, String op) {
        int answer = 0;
        switch (op) {
            case "+":
                answer = a + b;
                break;
            case "-":
                answer = a - b;
                break;
            case "*":
                answer = a * b;
                break;
            case "/":
                answer = a / b;
                break;
            default:
                System.out.println("Enter in one of these symbols: +, -, *, /");
        }
        return answer;
    }
}