// Assignment code here


//Variables/Arrays for password
var characterLength = 8;
var choiceArray = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>'];
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
  var correctPrompts = getprompts();
  

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = newPassword;
  }
  else {
    passwordText.value = "";
  }


}

//Generate password based on prompt
function generatePassword() {

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;

}

//Prompts for password length/characters
function getprompts() {

  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a numberArr, 8 - 128 characters.) Please try again.");
    return false;
  }

  if (confirm("Would you like to lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCassArr);
  }
  if (confirm("Would you like to uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArr);
  }
  if (confirm("Would you like to special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharArr);
  }
  if (confirm("Would you like to numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArr);
  }
  return true;
}







