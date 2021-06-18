// Assignment code here

// declares the characters that can go into lowercase, uppercase, numeric, and special characters
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: " !#$%&'()*+,-/:;<=>?@[\\]^_`{|}~"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// a function to get the desired length of the password and conditional response
var passLength = function() {
  var length = window.prompt("How many characters should your password be? min 8 characters, max 128 characters.");
  if (length <= 128 && length >= 8){
    return length;
  }else {
    window.alert("Not a valid entry, try again...");
    passLength();
  }
}

// this function builds a random number based on the length of the string passed as an argument
var randomNumber = function(string){
  return Math.floor(Math.random() * string.length + 1); 
}

function generatePassword() {
  // declare string variables
  var passCharacters = ""
  var password = "";

  // create criteria object
  var criteria = {
    length: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    special: false
  };

  // prompt for criteria values
  criteria.length = passLength();
  criteria.lowercase = window.confirm("Do you want to use lowercase letters in your password?");
  criteria.uppercase = window.confirm("Do you want to use uppercase letters in your password?");
  criteria.numeric = window.confirm("Do you want to use numeric characters in your password?");
  criteria.special = window.confirm("Do you want to use special characters in your password?");

  //verify all criteria are not false, otherwise restart generatePassword()
  if (
    criteria.lowercase === false &&
    criteria.uppercase === false &&
    criteria.numeric === false &&
    criteria.special === false
  ) {
    window.alert("You must select at least one character type for your password.");
    generatePassword();
  }
  
  // if statements to build string of characters to choose from for password generation
  if (criteria.lowercase){
    passCharacters += characters.lowercase;
  } 
  if (criteria.uppercase){
    passCharacters += characters.uppercase;
  } 
  if (criteria.numeric){
    passCharacters += characters.numeric;
  } 
  if (criteria.special){
    passCharacters += characters.special;
  } 

  // build password
  // add character to the password based on the passCharacters string built earlier
  // loop the function * the length of the password established in criteria.length
  for (var i = 0; i < criteria.length; i++) {
    password += passCharacters[randomNumber(passCharacters)]
  }

  // return the password value
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
