// Assignment code here
let passwordLength;
let characterTypesArray;
let hasLowercase;
let hasUppercase;
let hasNumbers;
let hasSpecials;
let characterTypesString = '';
let password = '';
let passwordText;

// returns password length between 8 and 128 characters
function passwordLengthPrompt() {
  passwordLength = window.prompt('How many characters would you like your password to have? (password must be between 8 and 128 characters long)');
  passwordLength = parseInt(Number(passwordLength));
  
  // valid input
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(`password length: ${passwordLength}`);
    // invalid input
  } else {
    window.alert('Error: Invalid input. Please try again.');
    passwordLengthPrompt();
  }
}

// returns array with character types selected
function characterTypesConfirm() {
  hasLowercase = window.confirm("Would you like to include lowercase letters? Select 'OK' for yes or 'Cancel' for no.");
  hasUppercase = window.confirm("Would you like to include uppercase letters? Select 'OK' for yes or 'Cancel' for no.");
  hasNumbers = window.confirm("Would you like to include numbers? Select 'OK' for yes or 'Cancel' for no.");
  hasSpecials = window.confirm("Would you like to include special characters? Select 'OK' for yes or 'Cancel' for no.");
  
  // array created and populated with user input
  characterTypesArray = [hasLowercase, hasUppercase, hasNumbers, hasSpecials];
  
  // invalid input
  if ((hasLowercase === false) && (hasUppercase === false) && (hasNumbers === false) && (hasSpecials === false)) {
    window.alert('Error: No character types included. Please include at least one character type.');
    characterTypesConfirm();
  
  // valid input
  } else {
    console.log(
      `includes lowercase letters: ${hasLowercase}
      \nincludes uppercase letters: ${hasUppercase}
      \nincludes numbers: ${hasNumbers}
      \nincludes special characters: ${hasSpecials}`);
  }
}

// returns generated password
function generatePassword() {
  characterTypesString = '';
  if (hasLowercase) {characterTypesString += 'abcdefghijklmnopqrstuvwxyz';}
  if (hasUppercase) {characterTypesString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}
  if (hasNumbers) {characterTypesString += '0123456789';}
  if (hasSpecials) {characterTypesString += "' !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; characterTypesString += '"';}
  for (var i = 1; i <= passwordLength; i++) {
    password += characterTypesString.charAt(Math.floor(Math.random() * characterTypesString.length +1));
  }
  console.log(`password: ${password}`);
}

// Write password to the #password input
  function writePassword() {
    // determine length with prompt
    passwordLengthPrompt();
    // determine character types used with confirms
    characterTypesConfirm();
    // generate password according to user input
    generatePassword();
    // find password element
    passwordText = document.querySelector("#password");
    // write password on page
    passwordText.value = password;
  }
  

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ACCEPTANCE CRITERIA
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// ISSUES
// 1. create an initial README with link to deployed site and starter code
// 2. present series of prompts that generate when button is clicked
// 3. ask length of password (8 to 128 characters)
// 4. ask which character types will be used (lowercase, uppercase, numeric, and/or special characters)
// 5. generates password in accordance with user input
// 6. display the generated password on the page
// 7. update README (incluse screenshots of deployed application)