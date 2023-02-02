//=============
// Select random character from the strings
const randomNumber = numberCodes[Math.floor(Math.random() * numberCodes.length)];
const randomLowerCase = lowerCaserCodes[Math.floor(Math.random() * lowerCaserCodes.length)];
const randomUpperCase = upperCaserCodes[Math.floor(Math.random() * upperCaserCodes.length)];
const randomSpecial = specialerCodes[Math.floor(Math.random() * specialerCodes.length)];
//=============





// Select random character from the collection
var charactersToSelect = [];
const randomCharacter = charactersToSelect[Math.floor(Math.random() * charactersToSelect.length)];


var password = [];




generatePwE.addEventListener('submit', function userInputData(){
     
  const length = +charNumberELT.value;

  const lowerChecked = lowerCaseELT.checked;
  const uperChecked = upperCaseELT.checked;
  const numberChecked = numbersELT.checked;
  const specialChecked = specialsELT.checked;

  // const password =  generatPassword (length, lowerChecked, uperChecked, numberChecked, specialChecked)

  for(let i = 0; i < length; i++) {
    const randoms = {
      // "? to take the place of "if"  https://javascript.info/ifelse, this looks good
      number: (numberChecked) ? numberGenerator() : "",
      lower: (lowerChecked ? lowerCaseGenerator : ""),
      upper: (uperChecked ? UpperCaseGenerator : ""),
      special: (specialChecked ? specialCharGenerator : ""),
    }

    var numberO = randoms.number;
    var lowerO = randoms.lower;
    var uperO = randoms.lower;
    var specialO = randoms.special; 
    var string = (numberO+lowerO+uperO+specialO)
  return string;
}

console.log(userInputData());

})

// Generate related random characters with functions, The ASCII Character Set: https://www.w3schools.com/charsets/ref_html_ascii.asp 

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

// define an object to store all the random characters
const randomCharacterSet = { 
  lowerChar: lowerCaseGenerator,
  upperChar: UpperCaseGenerator,
  numberChar: numberGenerator,
  specialChar: specialCharGenerator
};


// After selecting the options, click the button to generate a password;

closeOptions.addEventListener('click', function(){
  options.close();
});




// Get the element button which closes the dialog and generates the password at the same time
const generatePwE = document.getElementById('closeOptions');


// Get user inputs and generate pwd with a function, and put into the password text area.  


// // // Get the user's input, this will be submitted after the user clicks the generate password button, so they should be moved into the function happens after the submit event.
//   



// const generatePassword = function(length, numberChecked, lowerChecked, uperChecked, specialChecked) 








// //============
// var charactersToSelect = [];

 
  
//   console.log(numberGenerator());

//   numberGenerator();
  



  // const passwordtext = [];