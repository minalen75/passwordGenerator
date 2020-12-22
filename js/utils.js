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
    function generatePWD() 
    {
        var includeSpecChar = document.getElementById("specChar").checked; 
        var includeNumbers = document.getElementById("includeNumbers").checked;
        var includeUpperLetters = document.getElementById("UpperLetters").checked;
        var includelowercaseLetters = document.getElementById("LowerLetters").checked;
        var combination = document.getElementById("Combination").checked;
        

        console.log(includeSpecChar);
        console.log(includeNumbers);
        console.log(includeUpperLetters);
        console.log(includelowercaseLetters);
        console.log(combination);
        pwd1 = +document.getElementById("pwdLength").value;
        
        // checks upper bounds and lower bounds of variable
        if ((pwd1 < 8) || (pwd1 > 128)) {
            alert("Password Values must exceed 8 or be less than 128")
        }
       // ################################# CHECKBOX VALIDATION TEST #####################################
        if((includeSpecChar === true) && ((includeNumbers === true) || (includeUpperLetters === true) || (includelowercaseLetters === true) || (combination === true)))
        {
            document.getElementById("password").innerHTML = "SELECT ONE CHECKBOX ONLY";
            return;
        }

        if((includeNumbers === true) && ((includeSpecChar === true) || (includeUpperLetters === true) || (includelowercaseLetters === true) || (combination === true)))
        {
            document.getElementById("password").innerHTML = "SELECT ONE CHECKBOX ONLY";
            return;
        }

        if((includeUpperLetters === true) && ((includeSpecChar === true) || (includeNumbers === true) || (includelowercaseLetters === true) || (combination === true)))
        {
            document.getElementById("password").innerHTML = "SELECT ONE CHECKBOX ONLY";
            return;
        }

        if((includelowercaseLetters === true) && ((includeSpecChar === true) || (includeNumbers === true) || (includeUpperLetters === true) || (combination === true)))
        {
            document.getElementById("password").innerHTML = "SELECT ONE CHECKBOX ONLY";
            return;
        }
        if((combination === true) && ((includeSpecChar === true) || (includeNumbers === true) || (includeUpperLetters === true) || (includelowercaseLetters === true)))
        {
            document.getElementById("password").innerHTML = "SELECT ONE CHECKBOX ONLY";
            return;
        }
        if((includeSpecChar === false) && (includeNumbers === false) && (includeUpperLetters === false) && (includelowercaseLetters === false) && (combination === false))
            {
                document.getElementById("password").innerHTML = "PLEASE SELECT A CHECKBOX";
                return;
            }


         //check for lower case 
        if ((includelowercaseLetters === true)  )
        {
            
            // CREATE THE PASSWORD
            var collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            console.log(password);
            
            includelowercaseLetters = false; 
            password = "";
            
            // var collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
        }

        //check for  upper case letters
        if (includeUpperLetters === true) {
           
            // CREATE THE PASSWORD 
            
            var collectionofUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionofUpperLetters[Math.floor(Math.random() * collectionofUpperLetters.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            password = "";
            var collectionofUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
        }
        
        //Check for collection of special characters
        if ((includeSpecChar === true)){
            //CREATE THE PASSWORD
            var specialsymbols = "!@#$%^&*";
            
            for (var i = 0; i < pwd1; i++) {
                randomNumber = specialsymbols[Math.floor(Math.random() * specialsymbols.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            
            password = ""; 
            specialsymbols = false; 
        }

        //Check for collection of numbers
        var includeUpperLetters = document.getElementById("UpperLetters").checked;
            if ((includeNumbers === true)){
            //CREATE THE PASSWORD
            var collectionOfNumbers = "0123456789";
            
            for (var i = 0; i < pwd1; i++) {
                randomNumber = collectionOfNumbers[Math.floor(Math.random() * collectionOfNumbers.length)]
                password += randomNumber
            }
            document.getElementById("password").innerHTML = password;
            
            password = ""; 
            includeNumbers = false;
        }
        var combination = document.getElementById("Combination").checked;
        if (combination === true) 
        {
            var collectionOfLetters = "abcdefghijklmnopqrstuvwxyz";
            var collectionofUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var collectionOfNumbers = "0123456789"
            var specialsymbols = "!@#$%^&*"
            
            var avengersAssemble = collectionOfLetters + collectionofUpperLetters + collectionOfNumbers + specialsymbols;
            console.log(avengersAssemble); 
            //debugger;
            //collectionOfLetters = collectionOfLetters + collectionofUpperLetters + collectionOfNumbers + specialsymbols;

            // CREATE THE PASSWORD
            for (var i = 0; i < pwd1; i++) {
                randomNumber = avengersAssemble[Math.floor(Math.random() * avengersAssemble.length)]
                password += randomNumber
            }
            console.log(combination);
            console.log(password); 
            //debugger; 
            
            // CHECK PASSWORD REQUIREMENTS
            if ((password.includes("!") || password.includes("@") || password.includes("#") || password.includes("%") || password.includes("^") || password.includes("&") ||
                password.includes("*")) && (password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") ||
                password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0"))) {
                document.getElementById("password").innerHTML = password;
                password = "";
            } else {
                password = ""; 
                generatePWD();               
               
            }

            includeSpecChar = false;
            includeNumbers = false;
            includeUpperLetters = false;
            includelowercaseLetters = false;
            combination =false; 

            
        }
        
    }   



document.getElementById("generate").addEventListener("click", generatePWD);