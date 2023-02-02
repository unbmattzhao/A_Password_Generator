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


// Length data of the password
const charNumberELT = document.getElementById('charNumber');

// get elments for options to add to the password
const numbersELT = document.getElementById('numbers');
const lowerCaseELT = document.getElementById('lowerCase');
const upperCaseELT = document.getElementById('upperCase');
const specialsELT = document.getElementById('specials');

// get the password text area 
const passwordArea = document.getElementById('password');

// get the passport generator buttom

const passwordBtn = document.getElementById('closeOptions');


// Generate character array
var numberCodes = []; 
var lowerCaserCodes = [];
var upperCaserCodes = [];
var specialerCodes = [];

numberCodes = ArrayNumtoChar(48, 57);
lowerCaserCodes = ArrayNumtoChar(65, 90);
upperCaserCodes = ArrayNumtoChar(97, 122);
specialerCodes = ArrayNumtoChar(33, 47).concat(ArrayNumtoChar(58, 64)).concat(ArrayNumtoChar(91, 96)).concat(ArrayNumtoChar(123, 126));


// Array function to get characters. The ASCII Character Set: https://www.w3schools.com/charsets/ref_html_ascii.asp 

function ArrayNumtoChar (start, end) {
  let array = [];
  for (let i = start; i <= end; i++){
    array.push(i)
  return array
  }
}

function generatePassword(numberChecked, lowerChecked, uperChecked, uperChecked, specialChecked) {
  let passwordCode = [];
  if (numberChecked) passwordCode = passwordCode.concat(numberCodes);
  if (lowerChecked) passwordCode = passwordCode.concat(lowerCaserCodes);
  if (uperChecked) passwordCode = passwordCode.concat(upperCaserCodes);
  if (specialChecked) passwordCode = passwordCode.concat(specialerCodes); 

const passwordChar = []
for (let i = 8; i < length; i++){
  const RandomCharCode = passwordCode[Math.floor(Math.random() * passwordCode.length)];

  passwordChar.push(String.fromCharCode(RandomCharCode))

}
}

passwordBtn.addEventListener('click', function () {
  const length = +charNumberELT.value;
  const numberChecked = numbersELT.checked;
  const lowerChecked = lowerCaseELT.checked;
  const uperChecked = upperCaseELT.checked;
  const specialChecked = specialsELT.checked;
  if (numberChecked === false && lowerChecked === false && uperChecked === false && specialChecked === false) {
    alert ("Please Select at least One Option!")
  }  else{
  const password = generatePassword(length, numberChecked, lowerChecked, uperChecked,specialChecked);
  passwordArea.innerText = password;}}
  )

  // This also works as a reminder to select at least one option, but kind of annoying.
// document.getElementById("closeOptions").onmouseover = function() {getAlert()};
// function getAlert(){
//   alert('Please Select at least One Option!');
// }


