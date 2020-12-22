// VARIABLES USED IN JAVA SCRIPT
var includeSpecChar = false;
var includeNumbers = false;
var includePrompts = false;
var includeUpperLetters = false; 
var includelowercaseLetters = false; 
var pwd1 = 0;
var collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
var collectionofUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var collectionOfNumbers = "0123456789"
var specialsymbols = "!@#$%^&*"
var generatedPassWord = "";
var useSpecialChar = 1;
var useNumbers = 1;
var randomNumber;
var password = "";
var n;



// FUNCTION TO GENERATE PASSWORD    
    function generatePWD() {
        var includeSpecChar = document.getElementById("specChar").checked; 
        var includeNumbers = document.getElementById("includeNumbers").checked;
        var includeUpperLetters = document.getElementById("UpperLetters").checked;
        var includelowercaseLetters = document.getElementById("LowerLetters").checked;
        
        pwd1 = +document.getElementById("pwdLength").value;
        
        // checks upper bounds and lower bounds of variable
        if ((pwd1 < 8) || (pwd1 > 128)) {
            alert("Password Values must exceed 8 or be less than 128")
        }
       
         //check for lower case 
        if (includelowercaseLetters === true) {
            
            
            // CREATE THE PASSWORD 
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            password = "";
            collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";

        }

        //check for  upper case letters
        if (includeUpperLetters === true) {
           
            // CREATE THE PASSWORD 
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionofUpperLetters[Math.floor(Math.random() * collectionofUpperLetters.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            password = "";
            // collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";

        }
        // CHECK FOR UPPER AND LOWER CASE
        if((includeUpperLetters === true) && (includelowercaseLetters)){
            collectionOfLetters = collectionOfLetters + collectionofUpperLetters;
            //CREATE THE PASSWORD
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            password = "";
            //collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";

        }


        // Check for collection of numbers, spec characters and numbers create password if all are present
        if ((includeSpecChar === true) && includeNumbers === true) {
            collectionOfLetters = collectionOfLetters + specialsymbols;
            collectionOfLetters = collectionOfLetters + collectionOfNumbers;
            collectionOfLetters = collectionOfLetters +collectionofUpperLetters;
            // CREATE THE PASSWORD 
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
                password += randomNumber
            }
            includeSpecChar = false;
            includeNumbers = false; 
            collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
            // CHECK PASSWORD REQUIREMENTS - SPECIAL CHARACTERS
            if (password.includes("!") || password.includes("@") || password.includes("#") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*")) {
                document.getElementById("password").innerHTML = password;
                password = "";
            } else {
                password = "";
                document.getElementById("password").innerHTML = password;
            }
            // ############################################################

        }
        // Check for collection of letters and spec char
        if ((includeSpecChar === true) || (includeNumbers === true)) {
            if (includeSpecChar === true) {
                collectionOfLetters = collectionOfLetters + specialsymbols + collectionofUpperLetters;

            }
            if (includeNumbers === true) {
                collectionOfLetters = collectionOfLetters + collectionOfNumbers + collectionofUpperLetters;

            }
            // CREATE THE PASSWORD
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
                password += randomNumber
            }
            includeSpecChar = false;
            includeNumbers = false; 
            collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
            // CHECK PASSWORD REQUIREMENTS
            if (password.includes("!") || password.includes("@") || password.includes("#") || password.includes("%") || password.includes("^") || password.includes("&") ||
                password.includes("*") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") ||
                password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0")) {
                document.getElementById("password").innerHTML = password;
                password = "";
            } else {
                password = "";
                document.getElementById("password").innerHTML = password;
            }
            // ###############################################################################################

        }
    }



document.getElementById("generate").addEventListener("click", generatePWD);