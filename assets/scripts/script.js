//Dom elements

var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");


// Put Generated functions in an object
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}
// generate event listener
generateEl.addEventListener("click", function() {
  var length = +lengthEl.value;
  var hasLower =lowercaseEl.checked;
  var hasUpper =uppercaseEl.checked;
  var hasNumber =numbersEl.checked;
  var hasSymbol =symbolsEl.checked;
  
  

  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//create password function 
function generatePassword(lower, upper, number, symbol, length) {

// input password variable
  let generatePassword = '';
  var typesCount = lower + upper + number + symbol;

//Filter outunchecked types

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );
  

  if(typesCount === 0) {
    return '';
 }

 //  loop over length call generator function for each type

 for (let i=0; i < length; i += typesCount) {
   typesArr.forEach(type => {
     var funcName = Object.keys(type)[0];
     //console.log('funcName:', funcName);

     generatePassword += randomFunc[funcName]();
   });

 }
// add final password
var finalPassword = generatePassword.slice(0, length);
return finalPassword;


}



// Generate functions 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=<>/,.'; 
  return symbols[Math.floor(Math.random() * symbols.length)];
}

   




































































//  // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
