// question number 1
// var curr = new Date;
// var first = curr.getDate() - curr.getDay();

// console.log(first,curr);


// question number 2
// var firstName= prompt("Enter your first name");
// var lastName= prompt("Enter your last name");

// var fullname = firstName + lastName;
// alert(fullname); 

// question number 3
// var firstNumber= prompt("Enter your first number");
// var lastNumber= prompt("Enter your last number");
// var fullNumber = firstNumber + lastNumber;

// alert(fullNumber);


// question number 4
// var firstNumber= prompt("Enter your first number");
// var lastNumber= prompt("Enter your last number");
// var oprater = prompt("Enter a oprater");
// var fullNumber;
// if (oprater == "+" ) {
//     fullNumber = firstNumber + lastNumber;
// }else if(oprater == "-"){
//     fullNumber = firstNumber - lastNumber;
// }else if(oprater == "x"){
//     fullNumber = firstNumber * lastNumber;
// }else if(oprater == "/"){
//     fullNumber = firstNumber / lastNumber;
// }else{
//     alert("Try using [+,-,x,/]");
// }

// alert(fullNumber);
 

// question number 5
// function squares (n){
//     alert(n * n);
// }


// question number 6
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }
// let num = 5;
// console.log("Factorial of", num, "is", factorial(num));



// question number 7
// var contnumber = prompt("Enter a starting number");
// var contlastnumber = prompt("Enter a last numbar for cont");

// for (let i = contnumber; i <= contlastnumber; i++) {
//     document.write("<br>");
//    document.write(i);
   
// }


// question number 8
// var Base = 40;
// var Perpendicular = 80;
// function calculateHypotenuse(){
//     var Hypotenuse = Base + Perpendicular;
//     alert(Hypotenuse);
//     function calculateSquare(){
//         var Square = Hypotenuse*Hypotenuse;
//         alert(Square);
//     }
// }


// question number 9
// function rectangle(width, height){
//     var A = width * height;

//     alert(A);
// }


// question number 10
// function palindrome( mavia){
//     var character = mavia.split('').reverse().join('');

//     console.log(character);
// }
// question number 11
//   var upperword = 'mavia';
//   console.log(upperword.charAt(0).toLocaleUpperCase()+upperword.slice(1));


// question number 12
// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//         let cleanedWord = words[i].replace(/[^a-zA-Z]/g,'');
//         if (cleanedWord.length > maxLength) {
//             longestWord = cleanedWord;
//             maxLength = cleanedWord.length;
//         }
//     }

//     return longestWord;
// }

// // Test the function with an example string
// let exampleString = 'Web Development Tutorial';
// let longestWord = findLongestWord(exampleString);
// console.log("Longest word:", longestWord);


// question number 13
//   function cont(word,number){
//     var mavia = word.length;
//     number = mavia;
//     console.log(number)
//   }


// question number 14
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2)); // toFixed(2) limits the number of decimal places to 2
// }
// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     console.log("The area is " + area.toFixed(2));
// }
// let radius = 5;
// calcCircumference(radius);
// calcArea(radius);


// data method
// question number 1
//  var curr = new Date;
//  var first = curr.getDate() - curr.getDay();

//  console.log(first);


 // question number 2
//  var curr = new Date;
//  var month = curr.getMonth();

//  console.log(month);


 // question number 3
//  var curr = new Date();
//  var dd = curr.getDate();
//  var mm = curr.getMonth()+1;

//  var yy = curr.getFullYear();
//  if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm};

// curr = dd+'/'+mm+'/'+yy;
//  console.log(curr);


 // question number 4
//  var curr = new Date();
//  var dd = curr.getDay();
//  if (dd === 7 || dd === 6) {
//     alert('its fun day');
//  }


 // question number 5
//  var curr = new Date();
//  var dd = curr.getDate();
//  var mm = curr.getMonth()+1;

//  var yy = curr.getFullYear();
//  if(dd<10 || dd <= 15){dd='0'+dd; alert('First fiftee days of the month');
// }else{
//     alert('Last days of the month');
// }; 
//  if(mm<10){mm='0'+mm};

// curr = dd+'/'+mm+'/'+yy;

// console.log(carr)


 // question number 6
// let currentDate = new Date();
// let millisecondsSinceEpoch = currentDate.getTime();
// let minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);


 // question number 7
// let currentDate = new Date();
// let currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


 // question number 8
//  let laterDate = new Date(2020, 11, 31);


 // question number 9
//  let ramadanStart = new Date(2015, 5, 18);
// let currentDate = new Date();

// let timeDifference = currentDate.getTime() - ramadanStart.getTime();
// let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days passed since 1st Ramadan: " + daysPassed);



 // question number 10
//  let referenceDate = new Date();
// referenceDate.setFullYear(2015, 0, 1);

// let currentDate = new Date();

// let timeDifference = currentDate.getTime() - referenceDate.getTime();
// let secondsElapsed = Math.floor(timeDifference / 1000);

// document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed);



 // question number 11
//  let currentDate = new Date();
// let currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);

// document.write(currentDate);



 // question number 12
//  let currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert(currentDate);


 // question number 13
//  let age = prompt("Please enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;

// alert("Your birth year is: " + birthYear);



 // question number 14
//  let customerName = prompt("Enter your name:");
//  let currentDate = new Date();
//  let currentMonth = currentDate.toLocaleString('default', { month: 'long' });
 

//  let unitsConsumed = parseFloat(prompt("Enter the units consumed:"));
//  let unitPrice = parseFloat(prompt("Enter the unit price:"));
 

//  let billAmount = unitsConsumed * unitPrice;
//  let roundedBillAmount = billAmount.toFixed(2);
 

//  document.write("<h2>K-Electric Bill</h2>");
//  document.write("<p>Customer Name: " + customerName + "</p>");
//  document.write("<p>Current Month: " + currentMonth + "</p>");
//  document.write("<p>Units Consumed: " + unitsConsumed + "</p>");
//  document.write("<p>Unit Price: $" + unitPrice.toFixed(2) + "</p>");
//  document.write("<p>Total Bill Amount: $" + roundedBillAmount + "</p>");

// function method
// question number 1
// function power(a, b) {
//     return Math.pow(a, b);
// }
// console.log(power(2, 3)); // Output: 8
// console.log(power(5, 2)); // Output: 25



// question number 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false; 
//     }
// }
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true; 
//     } else {
//         return false; 
//     }
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021)); 



// question number 3
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     let s = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// let area = calculateTriangleArea(3, 4, 5);
// console.log(area);



// question number 4
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }
// function calculatePercentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }
// function mainFunction(subject1, subject2, subject3) {

//     let average = calculateAverage(subject1, subject2, subject3);
//     let totalMarks = subject1 + subject2 + subject3;
//     let percentage = calculatePercentage(totalMarks, 300);
//     console.log("Average: " + average.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
// }
// mainFunction(80, 85, 90);



// question number 5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }
// let str = "Hello";
// let char = "e";
// console.log(customIndexOf(str, char));


// question numbe 6
// function deleteVowels(sentence) {
//     const vowels = "aeiouAEIOU";

//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }
// let sentence = "This is a test sentence";
// console.log(deleteVowels(sentence));



// question number 7
// function countSuccessiveVowels(text) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     text = text.toLowerCase();
//     for (let i = 0; i < text.length - 1; i++) {
//         if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
//             count++;
//         }
//     }
//     return count;
// }
// let text = "This is a test sentence with multiple vowels.";
// console.log(countSuccessiveVowels(text)); 



// question number 8
// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// let distanceInKm = 100;
// console.log("Distance in meters:", convertToMeters(distanceInKm));
// console.log("Distance in feet:", convertToFeet(distanceInKm));
// console.log("Distance in inches:", convertToInches(distanceInKm));
// console.log("Distance in centimeters:", convertToCentimeters(distanceInKm));



// question number 9
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0;
//     }
// }

// const hoursWorked = 45;
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log("Overtime pay:", overtimePay);



// question number 10
// function calculateCurrencyNotes(amount) {
//     const denominations = [100, 50, 10];
//     const notes = { 100: 0, 50: 0, 10: 0 };

//     for (let i = 0; i < denominations.length; i++) {
//         const denomination = denominations[i];
//         if (amount >= denomination) {
//             notes[denomination] = Math.floor(amount / denomination);
//             amount %= denomination;
//         }
//     }

//     return notes;
// }

// const amount = 450; 
// const notes = calculateCurrencyNotes(amount);
// console.log("Number of 100 notes:", notes[100]);
// console.log("Number of 50 notes:", notes[50]);
// console.log("Number of 10 notes:", notes[10]);




 
 