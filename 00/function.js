function generatePassword(lowerChar, upperChar, numberChar, specialChar, length) {
	let generatedPassword = '';
	const typesCount = lowerChar + upperChar + numberChar + specialChar;
	const typesArr = [{lowerChar}, {upperChar}, {numberChar}, {specialChar}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}



generatePwE.addEventListener('click', function userInput() {
    const length = +charNumberF.value;
    const lowerChecked = lowerCaseF.checked;
    const uperChecked = upperCaseF.checked;
    const numberChecked = numbersE.checked;
    const specialChecked = specialsF.checked;
  
    passwordF.innerText = generatePassword(length, lowerChecked, uperChecked, numberChecked, specialChecked);
  });
  