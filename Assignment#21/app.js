// Chapter numbner 21-25

// Question number 1
// var firstName = prompt('Enter your First name');
// var secondName = prompt('Enter your Second name');

// document.write("My fullname is "+firstName+secondName);

// Question number 2
// var fullName = prompt('Enter your full name');

// document.write("My fullname is"+firstName+secondName)
// document.write(fullName.length)

// Question number 3
// var contryName =prompt('Enter your contry name');
// var indexValue =prompt('Enter string to find its index number');
// var indexNumber = contryName.indexOf(indexValue)

// document.write("String: "+contryName+'<br>')
// document.write('Index of '+"'"+indexValue+"': "+indexNumber)

// Question number 4
// var word =prompt('Enter a word');
// var findLetter =prompt('Enter string to find its index number');
// var gotLetter = word.lastIndexOf(findLetter)

// document.write("String: "+word+'<br>')
// document.write('Index of '+"'"+findLetter+"': "+gotLetter)


// Question number 5
// var word1 =prompt('Enter a word');
// var findCharacter =prompt('Enter a number to find its string value');
// var gotCharacter = word1.charAt(findCharacter)

// document.write("String: "+word1+'<br>')
// document.write('Index of '+"'"+findCharacter+"': "+gotCharacter)


// Question number 6
// var firstName = prompt('Enter your First name');
// var secondName = prompt('Enter your Second name');
// var fullName = firstName.concat(" "+secondName);
// document.write("My fullname is "+ fullName );


// Question number 7
// let cityName = "Hyderabad";
// let newCityName = cityName.replace("Hyder", "Islam");
// document.write(newCityName);



// Question number 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);



// Question number 9
// var str = "472";
// var num = Number(str);
// document.write("String value: " + str + "<br>");
// document.write("String type: " + typeof str + "<br>");
// document.write("Number value: " + num + "<br>");
// document.write("Number type: " + typeof num + "<br>");



// Question number 10
// var userInput = prompt("Enter some text:");
// var uppercaseInput = userInput.toUpperCase();
// alert("Uppercase input: " + uppercaseInput);



// Question number 11
// var userInput = prompt("Enter some text:");
// var titleCaseInput = userInput.split(' ').map(function(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }).join(' ');
// alert("Title case input: " + titleCaseInput);



// Question number 12
// var num = 35.36;
// var numAsString = num.toString();
// var result = numAsString.replace('.', '');
// alert(result);



// Question number 13
// function isValidUsername(username) {
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return false; 
//         }
//     }
//     return true;
// }
// function promptForUsername() {
//     var username = prompt("Enter your username:");
//     if (!isValidUsername(username)) {
//         alert("Please enter a valid username without special symbols [@, ., !]");
//         promptForUsername();
//     } else {
//         alert("Username accepted: " + username);
//     }
// }
// promptForUsername();



// Question number 14
// Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem(item) {
//     var userInput = item.toLowerCase();
//     var found = false;
//     for (var i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === userInput) {
//             found = true;
//             break;
//         }
//     }
//     if (found) {
//         alert("Yes, \"" + item + "\" is found in the list.");
//     } else {
//         alert("No, \"" + item + "\" is not found in the list.");
//     }
// }
// var userInput = prompt("Enter an item to search:");
// searchItem(userInput);



// Question number 15
// function validatePassword(password) {
//     if (password.length < 6) {
//         return false;
//     }
//     if (/^\d/.test(password)) {
//         return false;
//     }
//     var hasAlphabet = /[a-zA-Z]/.test(password);
//     var hasNumber = /\d/.test(password);
//     if (!hasAlphabet || !hasNumber) {
//         return false;
//     }

//     return true;
// }
// var userInput = prompt("Enter your password:");
// if (validatePassword(userInput)) {
//     alert("Password is valid.");
// } else {
//     alert("Please enter a valid password that contains alphabets and numbers, doesn't start with a number, and is at least 6 characters long.");
// }

// Question number 16
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("<p>Array elements:</p>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<li>" + universityArray[i] + "</li>");
// }
// document.write("</ul>");



// Question number 17
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("The last character of the input is: " + lastCharacter);



// Question number 18
// var inputString = "The quick brown fox jumps over the lazy dog";
// inputString = inputString.toLowerCase();
// var wordToCount = "the";
// var wordsArray = inputString.split(" ");
// var count = 0;
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === wordToCount) {
//         count++;
//     }
// }
// console.log("Number of occurrences of '" + wordToCount + "': " + count);
