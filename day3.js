// DAY 3: FUNCTION FACTORY — FUNCTIONS AND SCOPE

// 1. square(n) — Arrow function with implicit return
const square = (n) => n * n;

console.log("1. Square:");
console.log(square(4));
console.log(square(7));
console.log(square(0));


// 2. isEven(n) — Returns a boolean
function isEven(n) {
    return n % 2 === 0;
}

console.log("\n2. Is Even:");
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));


// 3. celsiusToFahrenheit(c)
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log("\n3. Celsius to Fahrenheit:");
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(-40));


// 4. fahrenheitToCelsius(f)
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log("\n4. Fahrenheit to Celsius:");
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(77));
console.log(fahrenheitToCelsius(-40));


// 5. formatPrice(amount, currency = "RWF")
function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString("en-US")} ${currency}`;
}

console.log("\n5. Format Price:");
console.log(formatPrice(15000));
console.log(formatPrice(250000, "USD"));
console.log(formatPrice(0));


// 6. getGrade(score) — With a guard clause
function getGrade(score) {
    if (
        typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 ||
        score > 100
    ) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n6. Get Grade:");
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(105));


// 7. max(...numbers) — Without Math.max
function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log("\n7. Maximum Number:");
console.log(max(5, 10, 3));
console.log(max(-8, -2, -15));
console.log(max());


// 8. capitalize(word)
function capitalize(word) {
    if (word.length === 0) {
        return "";
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log("\n8. Capitalize:");
console.log(capitalize("kenia"));
console.log(capitalize("dubai"));
console.log(capitalize("burundi"));


// 9. countVowels(text)
function countVowels(text) {
    let count = 0;
    const vowels = "aeiou";
    const lowerText = text.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
        if (vowels.includes(lowerText[i])) {
            count++;
        }
    }

    return count;
}

console.log("\n9. Count Vowels:");
console.log(countVowels("Kigali"));
console.log(countVowels("JavaScript"));
console.log(countVowels("rhythm"));


// 10. isPalindrome(word)
function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split("").reverse().join("");

    return lowerWord === reversedWord;
}

console.log("\n10. Is Palindrome:");
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("ana"));


// 11. repeatAction(times, callback)
function repeatAction(times, callback) {
    for (let i = 1; i <= times; i++) {
        callback(i);
    }
}

console.log("\n11. Repeat Action:");
repeatAction(3, (round) => console.log(`Round ${round}`));
repeatAction(2, (round) => console.log(`Hello ${round}`));
repeatAction(0, (round) => console.log(`Round ${round}`));


// 12. createCounter(start = 0) — Closure
function createCounter(start = 0) {
    let count = start;

    return {
        increment: function () {
            count++;
            return count;
        },

        decrement: function () {
            count--;
            return count;
        },

        getValue: function () {
            return count;
        }
    };
}

console.log("\n12. Create Counter:");

const counter1 = createCounter(5);
console.log(counter1.getValue());
console.log(counter1.increment());
console.log(counter1.decrement());

const counter2 = createCounter();
console.log(counter2.getValue());
console.log(counter2.increment());

const counter3 = createCounter(-1);
console.log(counter3.getValue());


// 13. makeDiscount(percent) — Returns a function
function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}

console.log("\n13. Make Discount:");

const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);

console.log(discount10(1000));
console.log(discount20(500));
console.log(discount10(0));


// SCOPE PUZZLE
// Predictions:
// inner 3
// function 2
// global 1

let x = 1;

function a() {
    let x = 2;

    if (true) {
        let x = 3;
        console.log("inner", x);
    }

    console.log("function", x);
}

a();
console.log("global", x);