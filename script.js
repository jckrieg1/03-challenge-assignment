// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength;
var passwordCharTypeUC;
var passwordCharTypeLC;
var passwordCharTypeSC;
var passwordCharTypeNum;

function getInput() {
  passwordlength=prompt("Please choose passsword length between 8 and 128 characters.");
  passwordlength=Number(passwordlength);
  if(isNaN(passwordlength)) {
    alert("Please type a number 8-128.")
  };
  passwordCharTypeUC=confirm("Would you like to use upper-case letters? Press 'OK' if yes and 'cancel' if no.");
  if(passwordCharTypeUC===true) {
    alert("You have chosen to use upper-case letters.")
  } 
  else { 
    alert ("You have chosen not to use upper-case letters.") 
  }
  passwordCharTypeNum=confirm("Would you like to use numeric characters? Press 'OK' if yes and 'cancel' if no.");
  if(passwordCharTypeNum===true) {
    alert("You have chosen to use numeric characters.")
  } 
  else { 
    alert ("You have chosen not to use numeric characters.") 
  }
  passwordCharTypeLC=confirm("Would you like to use lower-case letter?");
  if(passwordCharTypeLC===true) {
    alert("You have chosen to use lower-case letters.")
  } 
  else { 
    alert ("You have chosen not to use lower-case letters.") 
  }
  passwordCharTypeSC=confirm("Would you like to use special character?");
  if(passwordCharTypeSC===true) {
    alert("You have chosen to use special characters.")
  } 
  else { 
    alert ("You have chosen not to use special characters.") 
  }
if (passwordCharTypeUC===false && passwordCharTypeLC===false && passwordCharTypeSC===false && passwordCharTypeNum===false) {
  alert("Must choose one character type!")
}
}

// Write password to the #password input
function writePassword() {
 getInput ()
 if (passwordCharTypeUC===false && passwordCharTypeLC===false && passwordCharTypeSC===false && passwordCharTypeNum===false) {
  alert("Must choose one character type!")
}

  var password = generatePassword() {
    var ucArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
