// Assignment code here

// returns valid password length
function passwordLengthPrompt() {
  let passwordLength = window.prompt('How many characters would you like your password to have? (password must be between 8 and 128 characters long)');
  passwordLength = Number(passwordLength);
  
  // valid input
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(`password length: ${passwordLength}`);
  
  // invalid input
  } else {
    window.alert('Invalid input. Please try again');
    passwordLengthPrompt();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  passwordLengthPrompt();
  // (starter) var password = generatePassword();
  // (starter) var passwordText = document.querySelector("#password");
  // (starter) passwordText.value = password;
}

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

