//QN: 1 :What will be the output of the following code?
let a = 5;
let b = "5";
console.log(a == b); // Output: true, because == checks for value equality and performs type coercion
console.log(a === b); // Output: false, because === checks for both value and type equality

//QN: 2 :Write a program that takes a number and prints "Even" if it’s even, and "Odd" if it’s odd.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(10); // Output: "Even"
checkEvenOdd(7); // Output: "Odd"

//QN: 3 :Given a score out of 100, print:
//"A" for 90–100
//"B" for 80–89
//"C" for 70–79
//"Fail" for anything below 70
function printScore(score) {
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 0 && score < 70) {
  console.log("Fail");
} else {
  console.log("Invalid score");
}
}
printScore(95); // Output: "A"
printScore(85); // Output: "B"
printScore(75); // Output: "C"
printScore(65); // Output: "Fail"

//QN: 4 :Write a function isPrime(n) that returns true if the number is prime, false otherwise.
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
}
isPrime(5); // Output: true
isPrime(4); // Output: false

//QN 5: :Write a function that takes a string and returns the reversed version of that string.
console.log(reverseString("hello")); // Output: "olleh"
function reverseString(str) {
return str.split('').reverse().join('');
}

//QN: 6 :Write a simple login simulation:
//a. If username is "admin" and password is "1234", print "Access granted".
//b. Otherwise, print "Access denied".
let username = prompt("Enter username:");
let password = prompt("Enter password:");
// Check credentials
if (username === "admin" && password === "1234") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//QN: 7 :Write a function that evaluates a password string:
//At least 8 characters
//Includes at least one number
//Includes at least one uppercase letter
 //Return "Strong" if all true, else "Weak"
 function evaluatePassword(password) {
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const isLongEnough = password.length >= 8;

    if (hasNumber && hasUppercase && isLongEnough) {
      return "Strong";
    } else {
      return "Weak";
    }
}
evaluatePassword("Password1"); // Output: "Strong"
evaluatePassword("password"); // Output: "Weak"

//QN: 8 :Create a function that accepts a string and returns true if it is a palindrome.
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the string
  let reversed = cleanStr.split('').reverse().join('');
  // Compare original with reversed
  return cleanStr === reversed;
}
isPalindrome("Racecar"); // Output: true
isPalindrome("Hello"); // Output: false

//QN: 9 :Print numbers from 1 to 50. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for both, print "FizzBuzz".
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//QN: 10:Write a function drawTree(n) that prints a left-aligned triangle of asterisks (*) with n rows.
//Each row should contain one more * than the previous row.
function drawTree(n) {
    for (let i = 1; i <= n; i++) {
      console.log('*'.repeat(i));
    }
  }
drawTree(5); // Output:
// *
// **
// ***
// ****
// *****
