//Write a function that takes marks and returns the grade (A, B, C).






function grade() {

    let mark = 100;
    if (mark <= 34) {
        console.log("Fail");

    } else if (mark >= 35 && mark < 50) {
        console.log("Grade: F");

    } else if (mark >= 50 && mark < 60) {
        console.log("Grade: D");

    } else if (mark >= 60 && mark < 70) {
        console.log("Grade: C");

    } else if (mark >= 70 && mark < 80) {
        console.log("Grade: B");

    } else if (mark >= 80 && mark < 90) {
        console.log("Grade: A");

    }
    else if (mark >= 90 && mark <= 100) {
        console.log("Grade: A+");

    } else {
        console.log("Enter mark 1 to 100");

    }
}

grade()
