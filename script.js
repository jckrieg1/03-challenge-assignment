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
 getInput ();
 whichCharTypes();
 console.log(trackArr);
 createPasssword();
}


function whichCharTypes() {
  console.log("function called");
  trackArr=['0'];
  if(passwordCharTypeUC) {
trackArr.push('1');}
  if(passwordCharTypeNum) {
    trackArr.push('2');
      }
      if(passwordCharTypeLC) {
        trackArr.push('3');
      }
        if(passwordCharTypeSC) {
          trackArr.push('4');
            }
            trackArr.shift();
            console.log(trackArr);          
          };
          


function createPasssword() {
for(let i=0;i<passwordlength; i++) {
  var bucket = Math.floor(Math.random()*trackArr.length+1);
  if(bucket === 1) {
finalPw [i]=ucArray[Math.floor(Math.random()*ucArray.length)];
  }
  if(bucket === 2 ) {
    finalPw [i]=numArray[Math.floor(Math.random()*numArray.length)];
      }
      if(bucket === 3) {
        finalPw [i]===lcArray[Math.floor(Math.random()*lcArray.length)];
          }
          if(bucket === 4) {
            finalPw [i]===charArray[Math.floor(Math.random()*charArray.length)];
              }
              console.log(finalPw);
}
}



  // var password = generatePassword() {
  // };
  // for (let i=0; i<passwordlength; ++i) {

  // }
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

