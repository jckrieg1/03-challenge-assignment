// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength;
var passwordCharTypeUC;
var passwordCharTypeLC;
var passwordCharTypeSC;
var passwordCharTypeNum;
var ucArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lcArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArray=["0","1","2","3","4","5","6","7","8","9"];
var charArray=["!","@","#","$","^","&","*","?"];
var trackArr=[];
var finalPw=[];


var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArray = ["!", "@", "#", "$", "^", "&", "*", "?"];

// This array keeps track of which character types have been requested by the user.
var trackArr = [];

// This array will contain the final password in array form.
var finalPw = [];

// This variable will be the final generated password as a string.
var password = "";

// This function prompts the user for all of the information needed to construct the password.
function getInput() {
  passwordlength = prompt(
    "Please choose passsword length between 8 and 128 characters."
  );
  passwordlength = Number(passwordlength);
  if (isNaN(passwordlength)) {
    alert("Please type a number 8-128.");
  }
  passwordCharTypeUC = confirm(
    "Would you like to use upper-case letters? Press 'OK' if yes and 'cancel' if no."
  );
  if (passwordCharTypeUC === true) {
    alert("You have chosen to use upper-case letters.");
  } else {
    alert("You have chosen not to use upper-case letters.");
  }
  passwordCharTypeNum = confirm(
    "Would you like to use numeric characters? Press 'OK' if yes and 'cancel' if no."
  );
  if (passwordCharTypeNum === true) {
    alert("You have chosen to use numeric characters.");
  } else {
    alert("You have chosen not to use numeric characters.");
  }
  passwordCharTypeLC = confirm("Would you like to use lower-case letter?");
  if (passwordCharTypeLC === true) {
    alert("You have chosen to use lower-case letters.");
  } else {
    alert("You have chosen not to use lower-case letters.");
  }
  passwordCharTypeSC = confirm("Would you like to use special character?");
  if (passwordCharTypeSC === true) {
    alert("You have chosen to use special characters.");
  } else {
    alert("You have chosen not to use special characters.");
  }
  if (
    passwordCharTypeUC === false &&
    passwordCharTypeLC === false &&
    passwordCharTypeSC === false &&
    passwordCharTypeNum === false
  ) {
    alert("Must choose one character type!");
  }
}

// This function creates an array that contains numeric values representing each of the character types selected by the user.
function whichCharTypes() {
  trackArr = ["0"];
  if (passwordCharTypeUC) {
    trackArr.push("1");
  }
  if (passwordCharTypeNum) {
    trackArr.push("2");
  }
  if (passwordCharTypeLC) {
    trackArr.push("3");
  }
  if (passwordCharTypeSC) {
    trackArr.push("4");
  }
  trackArr.shift();
}

// This function pulls random characters of the requested types and fills the finalPw array. Then it creates the final password as a string.
function createPasssword() {
  var bucket;
  for (let i = 0; i < passwordlength; i++) {
    bucket = Math.floor(Math.random() * trackArr.length);
    console.log(bucket);
    console.log(trackArr);
    if (trackArr[bucket] === "1") {
      finalPw[i] = ucArray[Math.floor(Math.random() * ucArray.length)];
    }
    if (trackArr[bucket] === "2") {
      finalPw[i] = numArray[Math.floor(Math.random() * numArray.length)];
    }
    if (trackArr[bucket] === "3") {
      finalPw[i] = lcArray[Math.floor(Math.random() * lcArray.length)];
    }
    if (trackArr[bucket] === "4") {
      finalPw[i] = charArray[Math.floor(Math.random() * charArray.length)];
    }
  }
}

// This function creates the final password string.
function generatePassword() {
  password="";
  for (let i = 0; i < passwordlength; i++) {
    password = password + finalPw[i];
  }
}

// Write password to the #password input
function writePassword() {
  getInput();
  whichCharTypes();
  createPasssword();
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// The execution code starts here.
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);