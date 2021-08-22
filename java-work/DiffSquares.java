/*
This Java program is meant to take in the difference of two squares of a circle. 
It has one big square, where the circle is an incircle of the big square, and a 
smaller square, where it is inside the circle. For the bigger
square, the sides are equal to the diameter of the circle
*/
import java.util.Scanner;
import java.lang.Math;
public class DiffSquares {
    final double pi = Math.PI;
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter in the diameter of a circle: ");
        int theDiameter = input.nextInt();
        input.close();
        double diameter = theDiameter;
        double result = calculation(diameter);
        System.out.println(("Here is the calculation!"));
        System.out.println(result);
    }
    static double calculation(double d) {
        // This function will be used to make the calculation
        // calculate the area of the big square
        System.out.println("Calculating the difference: \n");
        double bigSquareArea = Math.pow(d, 2);
        // calculate the area of the smaller square
        double smallSquareArea = (d * Math.sqrt(2));
        // subtract the two areas
        double difference = bigSquareArea - smallSquareArea;
        return difference;
    }
}