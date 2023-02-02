// Assignment Code
var generateBtn = document.querySelector("#generate");




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


// get the password text area 
const passwordELT = document.getElementById('password');

// Length of the password
const charNumberELT = document.getElementById('charNumber');

// other options to add to the password
const lowerCaseELT = document.getElementById('lowerCase');
const upperCaseELT = document.getElementById('upperCase');
const numbersELT = document.getElementById('numbers');
const specialsELT = document.getElementById('specials');

// Get the element button which closes the dialog and generates the password at the same time
const generatePwE = document.getElementById('closeOptions');


// Get user inputs and generate pwd with a function, and put into the password text area.  


// // // Get the user's input, this will be submitted after the user clicks the generate password button, so they should be moved into the function happens after the submit event.
//   const length = +charNumberELT.value;
//   const numberChecked = numbersELT.checked;
//   const lowerChecked = lowerCaseELT.checked;
//   const uperChecked = upperCaseELT.checked;
//   const specialChecked = specialsELT.checked;


// const generatePassword = function(length, numberChecked, lowerChecked, uperChecked, specialChecked) 


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







// //============
// var charactersToSelect = [];

 
  
//   console.log(numberGenerator());

//   numberGenerator();
  



  // const passwordtext = [];