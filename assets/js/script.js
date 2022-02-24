// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables containing input types
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const nums = "0123456789"
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// initializing variables to store password or it's length
let passTemp = ""
let passPool = ""
let length = 0;

//this function makes sure to reset the previously recorded variable content from localStorage
function resetState() {
  passPool = "";
  passTemp = "";
  length = 0;
}
// this function makes sure client enters valid data and collects input data also updates password related variables
function getCriteria() {
  length = parseInt(prompt("How many characters lenght your password to be? (8-128)"));
  // if length input is not desired value show alert and ask again to enter the input
  if(!length) {
    alert("Not a valid number!");
    return getCriteria()
  } else if (length < 8) {
    alert("Please enter number bigger than or equal to 8!");
    return getCriteria()
  } else if (length >128) {
    alert("Please enter number less than or equal to 128!");
    return getCriteria()
  }
  
  //lowercase, uppercase, numeric, and/or special characters
  
  let lowercase = confirm("Do you want to include lowercase letters?");
  if (lowercase) {
    //if lowercase is selected, adds characters to passPool variable and adds randomly generated character to passTemp
    // passTemp ensures at least one character from selected criteria will be in password 
    passPool += lowerCaseLetters;
    passTemp += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
  }

  let uppercase = confirm("Do you want to include uppercase letters?");
  if (uppercase) {
    passPool += upperCaseLetters;
    passTemp += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
  } 
  let numeric = confirm("Do you want to include numeric characters?");
  if (numeric) {
    passPool += nums;
    passTemp += nums.charAt(Math.floor(Math.random() * nums.length));
  } 
  let special = confirm("Do you want to include special characters?");
  if (special) {
    passPool += specialChars;
    passTemp += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  // this if statement ensures at least one character type is chosen
  if(lowercase == false && uppercase == false && numeric == false && special == false) {
    alert("You need to choose at least one character type!")
    return
  }
};

function generatePassword() {
  resetPassword();
  resetState();
  getCriteria();
  let output = passTemp;
  for (let i=0; i < length - passTemp.length; i++) {
    output += passPool.charAt(Math.floor(Math.random() * passPool.length));
  }
  return output
}; 
function resetPassword() {
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = "";
  console.log(passwordText);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


