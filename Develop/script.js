// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passLength = function() {
  var length = window.prompt("How many characters should your password be? min 8 characters, max 128 characters.");
  if (length <= 128 && length >= 8){
    return length;
  }else {
    window.alert("Not a valid entry, try again...");
    passLength();
  }
}


function generatePassword() {
  var criteria = {
    length: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    special: false
  };

  criteria.length = passLength();
  criteria.lowercase = window.confirm("Do you want to use lowercase letters in your password?");
  criteria.uppercase = window.confirm("Do you want to use uppercase letters in your password?");
  criteria.numeric = window.confirm("Do you want to use numeric characters in your password?");
  criteria.special = window.confirm("Do you want to use special characters in your password?");

  if (
    criteria.lowercase === false &&
    criteria.uppercase === false &&
    criteria.numeric === false &&
    criteria.special === false
  ) {
    window.alert("You must select at least one character type for your password.");
    generatePassword();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
