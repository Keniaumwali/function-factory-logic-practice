
 // DAY 2: CONTROL FLOW (CONDITIONALS & LOOPS)
 // Assignment: Logic Practice

// ==========================================
// QUESTION 1: EVEN OR ODD
// Pseudocode:
// GET a number
// IF the number is divisible by 2, PRINT "even"
// ELSE, PRINT "odd"

const number = 3;

if (number % 2 === 0) {
    console.log("Q1: even");
} else {
    console.log("Q1: odd");
}


// ==========================================
// QUESTION 2: GRADE CALCULATOR
// Pseudocode:
// GET a score between 0 and 100
// IF the score is outside this range, PRINT "Invalid score"
// ELSE IF score >= 80, PRINT Grade A
// ELSE IF score >= 70, PRINT Grade B
// ELSE IF score >= 60, PRINT Grade C
// ELSE IF score >= 50, PRINT Grade D
// ELSE, PRINT Grade F

const score = 75;

if (score < 0 || score > 100) {
    console.log("Q2: Invalid score");
} else if (score >= 80) {
    console.log("Q2: Grade A");
} else if (score >= 70) {
    console.log("Q2: Grade B");
} else if (score >= 60) {
    console.log("Q2: Grade C");
} else if (score >= 50) {
    console.log("Q2: Grade D");
} else {
    console.log("Q2: Grade F");
}


// ==========================================
// QUESTION 3: TICKET PRICE
// Pseudocode:
// GET the person's age and student status
// IF age is over 65, SET price to 0
// ELSE IF age is under 12, SET price to 2000
// ELSE IF the person is a student, SET price to 3000
// ELSE, SET price to 5000
// PRINT the ticket price

const age = 20;
const isStudent = true;

let ticketPrice;

if (age > 65) {
    ticketPrice = 0;
} else if (age < 12) {
    ticketPrice = 2000;
} else if (isStudent) {
    ticketPrice = 3000;
} else {
    ticketPrice = 5000;
}

console.log("Q3: Ticket price:", ticketPrice, "RWF");


// ==========================================
// QUESTION 4: DAY PLANNER
// Pseudocode:
// GET the day name
// USE switch to check the day
// PRINT the activity for Monday to Friday
// PRINT "No class" on Saturday and Sunday
// PRINT "Invalid day" if the day is not recognized

const day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Q4: Monday - Learn new concepts");
        break;
    case "Tuesday":
        console.log("Q4: Tuesday - Control Flow practice");
        break;
    case "Wednesday":
        console.log("Q4: Wednesday - Functions and scope");
        break;
    case "Thursday":
        console.log("Q4: Thursday - DOM practice");
        break;
    case "Friday":
        console.log("Q4: Friday - Workshop and challenges");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Q4: No class");
        break;
    default:
        console.log("Q4: Invalid day");
}


// ==========================================
// QUESTION 5: COUNTDOWN
// Pseudocode:
// START counting from 10
// REPEAT while the number is greater than or equal to 1
// PRINT the number
// DECREASE the number by 1
// PRINT "Liftoff!"

console.log("Q5: Countdown");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");


// ==========================================
// QUESTION 6: SUM AND AVERAGE
// Pseudocode:
// CREATE an array of numbers
// SET sum to 0
// FOR EACH number in the array, ADD it to sum
// CALCULATE average by dividing sum by array length
// PRINT the sum and average

const numbers = [45, 78, 90, 62, 88];

let sum = 0;

for (const num of numbers) {
    sum += num;
}

const average = sum / numbers.length;

console.log("Q6: Sum:", sum);
console.log("Q6: Average:", average);


// ==========================================
// QUESTION 7: FIND THE FIRST NUMBER GREATER THAN 100
// Pseudocode:
// CREATE an array of numbers
// CHECK each number in the array
// IF a number is greater than 100, PRINT it
// STOP the loop using break

const values = [25, 80, 105, 150, 200];

for (const value of values) {
    if (value > 100) {
        console.log("Q7: First number greater than 100:", value);
        break;
    }
}


// ==========================================
// QUESTION 8: SKIP NEGATIVES
// Pseudocode:
// CREATE an array of positive and negative numbers
// CHECK each number
// IF the number is negative, SKIP it using continue
// OTHERWISE, PRINT the number

const mixedNumbers = [10, -5, 8, -2, 15, -9, 4];

console.log("Q8: Positive numbers:");

for (const num of mixedNumbers) {
    if (num < 0) {
        continue;
    }

    console.log(num);
}


// ==========================================
// QUESTION 9: MULTIPLICATION TABLE
// Pseudocode:
// START counting from 1
// REPEAT until the number reaches 12
// MULTIPLY 7 by the current number
// PRINT the multiplication in the required format

console.log("Q9: Multiplication table of 7");

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// ==========================================
// QUESTION 10: FIZZBUZZ
// Pseudocode:
// COUNT from 1 to 100
// IF divisible by both 3 and 5, PRINT "FizzBuzz"
// ELSE IF divisible by 7, PRINT "Kigali"
// ELSE IF divisible by 3, PRINT "Fizz"
// ELSE IF divisible by 5, PRINT "Buzz"
// OTHERWISE, PRINT the number

console.log("Q10: FizzBuzz");

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



// CHALLENGE11:RIGHT-ANGLED TRIANGLE
// Pseudocode:
// USE an outer loop for 5 rows
// USE an inner loop to add stars to each row
// PRINT each row of stars

console.log("Challenge: Right-angled triangle");

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += "*";
    }

    console.log(line);
}
