/*
This Java file is made so that I can know what type of date and time to use for a project.
I will keep this on my GitHub so that I can use this as a reference in the event that I want
to work with the date and the time of Java.
*/

import java.time.LocalDate;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class TimeTest {
    public static void main(String[] args) {
        System.out.println("Here is the Local date using LocalDate:");
        System.out.println(LocalDate.now());
        System.out.println("\nHere is the date using the Date class:");
        Date theDate = new Date();
        System.out.println(theDate.toString());
        System.out.println("\nThis is the local date time using the LocalDateTime");
        System.out.println(LocalDateTime.now());
        System.out.println("\nThis is the localtime using LocalTime");
        System.out.println(LocalTime.now());
    }
}
