// VARIABLE DECLARATIONS
let passwordLength;
let hasLowercase;
let hasUppercase;
let hasNumbers;
let hasSpecials;
let characterTypesString;
let password;
let passwordText;

//USER INPUT
// password length
function passwordLengthPrompt() {
  passwordLength = window.prompt('How many characters would you like your password to have? (password must be between 8 and 128 characters long)');
  passwordLength = parseInt(Number(passwordLength));
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(`password length: ${passwordLength}`);
  } else {
    window.alert('Error: Invalid input. Please try again.');
    passwordLengthPrompt();
  }
}
// character types
function characterTypesConfirm() {
  hasLowercase = window.confirm("Would you like to include lowercase letters? Select 'OK' for yes or 'Cancel' for no.");
  hasUppercase = window.confirm("Would you like to include uppercase letters? Select 'OK' for yes or 'Cancel' for no.");
  hasNumbers = window.confirm("Would you like to include numbers? Select 'OK' for yes or 'Cancel' for no.");
  hasSpecials = window.confirm("Would you like to include special characters? Select 'OK' for yes or 'Cancel' for no.");
  if ((!hasLowercase) && (!hasUppercase) && (!hasNumbers) && (!hasSpecials)) {
    window.alert('Error: No character types included. Please include at least one character type.');
    characterTypesConfirm();
  } else {
    console.log(
      `includes lowercase letters: ${hasLowercase}\nincludes uppercase letters: ${hasUppercase}\nincludes numbers: ${hasNumbers}\nincludes special characters: ${hasSpecials}`
    );
  }
}

// GENERATE PASSWORD
function generatePassword() {
  characterTypesString = '';
  password = '';
  if (hasLowercase) {characterTypesString += 'abcdefghijklmnopqrstuvwxyz';}
  if (hasUppercase) {characterTypesString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}
  if (hasNumbers) {characterTypesString += '0123456789';}
  if (hasSpecials) {characterTypesString += "' !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; characterTypesString += '"';}
  for (var i = 1; i <= passwordLength; i++) {
    password += characterTypesString.charAt(Math.floor(Math.random() * characterTypesString.length +1));
  }
  console.log(`password: ${password}`);
  console.log('I hope you enjoyed this password generating experience! - Michael')
}

// RUN PREVIOUS FUNCTIONS AND WRITE PASSWORD
function writePassword() {
  passwordLengthPrompt();
  characterTypesConfirm();
  generatePassword();
  // send password to textarea on page
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// start process when button is clicked  
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);