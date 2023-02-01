// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Generate related strings with functions

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

console.log(specialCharGenerator());


// Select the options page and add open/close actions;
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



