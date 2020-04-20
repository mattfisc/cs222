var pass = "";

// HOMEPAGE-------------------

// SUBMIT PASSWORD TO PHP
// TO SIGN INTO MEMBER PAGE


// ADD PASSWORD
function addDigitToPassword(num){
    pass += num;
    var userPassword = document.getElementById("userPwd").value = pass;
}

// DELETE ONE DIGIT OF PASSWORD
function deleteOneDigit(){
    pass = pass.substring(0,len(pass));
    encryptedPassword = encryptedPassword.substring(0,len(encryptedPassword));
    
    document.getElementById("userPwd").value = encryptedPassword;
}

// CLEAR PASSWORD
function clearPassword(){
    document.getElementById("userPwd").value = "";
    pass = ""

}


// PAGE THREE--------------------------
// MEMBER PAGE
function submit(){
    var input = document.getElementById("muscleInput").value;
    
    
    var xhr = new XMLHttpRequest();
    xhr.onload = createList;
    xhr.open("GET", "mem.php?q=" + input, true); 
    xhr.send();

}

function createList(){

    // ARRAY
    var json = this.responseText;
    document.getElementById("displayMuscleGroup").innerHTML = json;
}

