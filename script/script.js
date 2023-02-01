// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Generate related strings with functions, The ASCII Character Set: https://www.w3schools.com/charsets/ref_html_ascii.asp 

const numberGenerator = function (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const lowerCaseGenerator = function (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const UpperCaseGenerator = function (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const specialCharGenerator = function (){ 
  const specialChar = '!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~'; 
  return specialChar[Math.floor(Math.random() * specialChar.length)];
};

// define an object to store all the random strings
const randomStrings = {
  numberOb: numberGenerator,
  lowerCaseCharOb: lowerCaseGenerator,
  UpperCaseCharOb: UpperCaseGenerator,
  specialOb: specialCharGenerator
};

// Select-options page and add open/close actions;
const options = document.querySelector('.options');

const openOptions = document.querySelector('#openOptions');
const closeOptions = document.querySelector('#closeOptions');

// A click on the bottom botton opens the options page;
openOptions.addEventListener('click', function() {
  options.showModal();
});
// After selecting the options, click the button to generate a password;
closeOptions.addEventListener('click', function(){
  options.close();
});

// get all the related elements from the document, DOM operation.

const passwordF = document.getElementById('password');
const charNumberF = document.getElementById('charNumber');
const lowerCaseF = document.getElementById('lowerCase');
const upperCaseF = document.getElementById('upperCase');
const numbersE = document.getElementById('numbers');
const specialsF = document.getElementById('specials');
const generatePwE = document.getElementById('closeOptions');


// Get user inputs and store them into variables.
generatePwE.addEventListener('click', function() {
  const length = +charNumberF.value;
  const lowerChecked = lowerCaseF.checked;
  const uperChecked = upperCaseF.checked;
  const numberChecked = numbersE.checked;
  const specialChecked = specialsF.checked;

// Generate password with the user's inputs using a function.
// Limit the length of the password string as per the user's seclection


function generatePassword(length, lowerChecked, uperChecked, numberChecked, specialChecked) {

}



 passwordF.innerText = generatePassword(length, lowerChecked, uperChecked, numberChecked, specialChecked);

  
});



// console.log(password);