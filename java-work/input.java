// This java program will take in simple user import
import java.util.Scanner;

public class InputClass {
    public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter your name here sport");

        //convert from scanner to a string
        String name = scan.nextLine();

        // pick a number
        Scanner num = new Scanner(System.in);
        System.out.println("Enter in a number");
        // convert num to an integer
        String n = num.nextLine();
        int number = Integer.parseInt(n);

        if (number >= 50) {
            System.out.println("Your name is "+ name + " and you picked a number above 50");
        } else {
            System.out.println("Hello "+ name +", you picked a number below 50!!");
        }
    }
}