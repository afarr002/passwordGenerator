//variable delarations

var passLength = 0;
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = lowerCaseOptions.split("");
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = upperCaseOptions.split("");
var numOptions = "0123456789";
var numbers = numOptions.split("");
var specialCharactersOptions = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var specialCharacters = specialCharactersOptions.split("");

//functions

function userInput() {
  //prompt user for password length (8 - 128 characters)
  passLength = prompt(
    "How many characters in your password?" +
      "\n" +
      "Must be between 8 and 128 characters!"
  );
  //error handling - did they enter a valid number within the parameters?
  if (passLength < 8 || passLength > 128) {
    alert("Error" + "\n" + "Please choose a number between 8-128.");
    userInput();
    return;
  }
  //prompt user for character selections (lowercase, uppercase, numeric, special characters)
  userLowerCase = confirm(
    "Would you like to include lowercase characters?" + "\n" + "(a-z)"
  );
  userUpperCase = confirm(
    "Would you like to include uppercase characters?" + "\n" + "(A-Z)"
  );
  userNumbers = confirm("Would you like to include numbers?" + "\n" + "(0-9)");
  userSpecialCharacters = confirm(
    "Would you like to include special characters?" + "\n" + "()!#$%& etc"
  );
  //error handling - did the user select at least one option?
  if (
    lowerCase === false &&
    upperCase === false &&
    numbers === false &&
    specialCharacters === false
  ) {
    alert("Error!!" + "\n" + "You must select at least one option!");
    userInput();
    return;
  }
}

// create a function called generatePassword
//error handling - is there at least one of each of the criteria they selected represented?

function generatePassword() {
  userInput();

  var possibilities = "";

  if (userLowerCase) {
    possibilities += lowerCaseOptions;
  }

  if (userUpperCase) {
    possibilities += upperCaseOptions;
  }
  if (userNumbers) {
    possibilities += numOptions;
  }
  if (userSpecialCharacters) {
    possibilities += specialCharactersOptions;
  }

  var password = "";
  for (var i = 0; i < passLength; i++) {
    var rand = Math.floor(Math.random() * possibilities.length);
    var char = possibilities[rand];
    password += char;
  }

  return password;
}

//once generated, password must be displayed on the screen

// stores a reference to the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  // stores value for function generatePassword under the new variable password
  var passwordText = document.querySelector("#password");
  // stores a reference to the text area where password will be displayed

  passwordText.value = password;
  // stores the value of passwordText into the variable of password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
