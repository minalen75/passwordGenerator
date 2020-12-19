// // Watch for value of Special Character usage
// let spChar = document.getElementById("specChar");
// spChar.addEventListener('change', function () {
//     if (this.check) {
//         console.log("Checkbox is checked");

//     } else {
//         console.log("Checkbox is NOT checked");

//     }
// });

// // Watch for the value of special number usage
// let spNumbers = document.getElementById("includeNumbers");
// spNumbers.addEventListener('change', function () {
//     if (this.check) {
//         console.log("Checkbox is checked");

//     } else {
//         console.log("Checkbox is NOT checked")

//     }
// })

// Generate the password
var pwd1 = 0;
var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
var specialsymbols = "!@#$%^&*"
var generatedPassWord = "";
var useSpecialChar = 1;
var useNumbers = 1;
var randomNumber;
var password = "";
var n; 


//console.log(document.getElementById("pwdLength").value);


function generatePWD() {
    pwd1 = +document.getElementById("pwdLength").value;
    // alert(pwd1); 

    // checks upper bounds and lower bounds of variable
    if ((pwd1 < 8) || (pwd1 > 128)) {
        alert("Password Values must exceed 8 or be less than 128")
    } else {
        for (var i = 0; i < pwd1; i++) {
            randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
            password += randomNumber

        }


        if (password.includes("!") || password.includes("@") || password.includes("#") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*"))
            { 
                document.getElementById("password").innerHTML = password;
                password = "";
            }
        else {
            password="";
            document.getElementById("password").innerHTML = password; 
        }
        //alert(password);

    }







}



document.getElementById("generate").addEventListener("click", generatePWD);