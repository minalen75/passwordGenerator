

// Watch for value of Special Character usage
let spChar = document.getElementById("specChar");
    spChar.addEventListener('change', function () {    
        if (this.check) {
            console.log("Checkbox is checked");
        }
        else {
            console.log("Checkbox is NOT checked"); 
        }
});

// Watch for the value of special number usage
let spNumbers = document.getElementById("includeNumbers");
    spNumbers.addEventListener('change', function() {
        if (this.check){
            console.log("Checkbox is checked");
        }
        else {
            console.log("")
        }
    })

// Generate the password
var pwd1 = 0;

//console.log(document.getElementById("pwdLength").value);


function generatePWD(){
    pwd1 = +document.getElementById("pwdLength").value;
    alert(pwd1);

}



document.getElementById("generate").addEventListener("click", generatePWD);



