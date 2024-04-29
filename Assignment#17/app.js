// chapter 4
// question number 
// var a = 1, b = 2, c = 3;
// let x = 10, y = 20, z = 30;
// const pi = 3.14, gravity = 9.8, speedOfLight = 299792458;



// question number 2
// Legal variable names
// var myVariable;
// var _variable;
// var $variable;
// var user123;
// var camelCaseVariable;

// Illegal variable names
// var 123variable; // SyntaxError: Unexpected number
// var var; // SyntaxError: Unexpected token 'var'
// var my variable; // SyntaxError: Unexpected identifier
// var my-variable; // SyntaxError: Unexpected token '-'
// var my.variable; // SyntaxError: Unexpected token '.'



// question number 3

// JavaScript code here
// Fill in the blanks
// document.getElementsByTagName("p")[0].innerHTML = "Variable names can only contain letters, digits, underscores, and dollar signs. For example $my_1stVariable";
// document.getElementsByTagName("p")[1].innerHTML = "Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name";
// document.getElementsByTagName("p")[2].innerHTML = "Variable names are case sensitive";
// document.getElementsByTagName("p")[3].innerHTML = "Variable names should not be JS keywords";



// chapter 5
// question number 1
// function addNumbers() {

//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var sum = num1 + num2;
//   document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
// }


// question number 2
// function performOperations() {

//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var sum = num1 + num2;
//   var difference = num1 - num2;
//   var product = num1 * num2;
//   var quotient = num1 / num2;
//   var modulus = num1 % num2;
  
//   document.getElementById("results").innerHTML = 
//     "Sum: " + sum + "<br>" +
//     "Difference: " + difference + "<br>" +
//     "Product: " + product + "<br>" +
//     "Quotient: " + quotient + "<br>" +
//     "Modulus: " + modulus;
// }


// question number 3
// var num;
// document.write("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num += 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// var remainder = num % 3;
// document.write("The remainder is: " + remainder + "<br>");



// question number 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// console.log("The total cost of buying 5 tickets is: " + totalCost + " PKR");



// question number 5
// function displayMultiplicationTable(number) {
//     document.write("<h3>Table for " + number + "</h3>");
//     document.write("<ul>");
//     for (var i = 1; i <= 10; i++) {
//         var result = number * i;
//         document.write("<li>" + number + " * " + i + " = " + result + "</li>");
//     }
//     document.write("</ul>");
// }
// var number = prompt("Enter a number to display its multiplication table:");
// displayMultiplicationTable(number);




// question number 6
// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }
// function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }
// var celsiusTemp = prompt("Enter the temperature in Celsius:");
// var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
// document.write("<p>" + celsiusTemp + "&#176;C is " + fahrenheitTemp + "&#176;F</p>");
// var fahrenheitTemp2 = prompt("Enter the temperature in Fahrenheit:");
// var celsiusTemp2 = fahrenheitToCelsius(fahrenheitTemp2);
// document.write("<p>" + fahrenheitTemp2 + "&#176;F is " + celsiusTemp2 + "&#176;C</p>");



// question number 7
// var priceItem1 = 500;

// var priceItem2 = 700;

// var quantityItem1 = 2;

// var quantityItem2 = 1;

// var shippingCharges = 50;

// var totalCostItem1 = priceItem1 * quantityItem1;

// var totalCostItem2 = priceItem2 * quantityItem2;

// var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("<p>Price of item 1: $" + priceItem1 + "</p>");
// document.write("<p>Price of item 2: $" + priceItem2 + "</p>");
// document.write("<p>Quantity of item 1: " + quantityItem1 + "</p>");
// document.write("<p>Quantity of item 2: " + quantityItem2 + "</p>");
// document.write("<p>Shipping charges: $" + shippingCharges + "</p>");
// document.write("<p><strong>Total cost: $" + totalCost + "</strong></p>");



// question number 8
// var totalMarks = 500;

// var marksObtained = 420;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Result</h2>");
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Marks obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");



// question number 9
// Define exchange rates
// var usdToPKR = 104.80;
// var sarToPKR = 28;

// var totalPKR = (10 * usdToPKR) + (25 * sarToPKR);

// document.write("<h2>Conversion Result</h2>");
// document.write("<p>Total amount in Pakistani Rupees: " + totalPKR.toFixed(2) + " PKR</p>");



// question number 10
// var number = 10;
// var result = ((number + 5) * 10) / 2;
// console.log("Result:", result);



// question number 11
// var currentYear = new Date().getFullYear();
// var birthYear = 1990; 
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// console.log("They are either " + age1 + " or " + age2 + " years old.");



// question number 12
// var radius = 5; 
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// console.log("The circumference is " + circumference.toFixed(2));
// console.log("The area is " + area.toFixed(2));



// question number 13
// var favoriteSnack = "chocolate";
// var currentAge = 30;
// var maximumAge = 80; 
// var amountPerDay = 2; 
// var remainingYears = maximumAge - currentAge;
// var totalSnacksNeeded = remainingYears * 365 * amountPerDay;

// console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge)



// chapter number 6-9
// question number 1
// var num = 10;
// var result = "<h2>Arithmetic Operations:</h2>";
// result += "<p>Initial number: " + num + "</p>";
// result += "<p>Add 5: " + (num + 5) + "</p>";
// result += "<p>Multiply by 10: " + (num * 10) + "</p>";
// result += "<p>Divide by 2: " + (num / 2) + "</p>";

// document.write(result);



// question number 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// console.log("a =", a); 
// console.log("b =", b); 
// console.log("result =", result); 



// question number 3
// var name = prompt("Enter your name:");
// alert("Hello, " + name + "! Welcome to our website.");



// question number 4
// var number = prompt("Enter a number:");
// if (number === null || number === "") {
//     number = 5;
// }
// number = parseInt(number);
// var table = "";
// for (var i = 1; i <= 10; i++) {
//     table += number + " x " + i + " = " + (number * i) + "<br>";
// }
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// document.write(table);



// question number 5
// Take input for subject names
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");
// var totalMarks = 100;
// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
// var message = "Subjects\tTotal Marks\tObtained Marks\n";
// message += subject1 + "\t\t" + totalMarks + "\t\t" + obtainedMarks1 + "\n";
// message += subject2 + "\t\t" + totalMarks + "\t\t" + obtainedMarks2 + "\n";
// message += subject3 + "\t\t" + totalMarks + "\t\t" + obtainedMarks3 + "\n\n";
// message += "Total Obtained Marks: " + totalObtainedMarks + "\n";
// message += "Percentage: " + percentage.toFixed(2) + "%";
// alert(message);

// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1
// question number 1