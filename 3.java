import java.util.Scanner;

class Student {
    String name;
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Student s1 = new Student();

        System.out.print("Enter student name: ");
        s1.name = sc.nextLine();

        System.out.println("Student Name: " + s1.name);
    }
}