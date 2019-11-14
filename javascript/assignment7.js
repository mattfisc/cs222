var startTime;

function getDifficulty(){
    var v = document.getElementsByName("difficulty");
    var difficulty_value;
    for (let index = 0; index < v.length; index++) {
        if(v[index].checked)
            difficulty_value = v[index].value;
    }
    return difficulty_value;
}
function startTest(){
    // start time
    startTime = new Date().getTime();
    // get difficulty
    var beginner_advanced = getDifficulty();
    // pointer to instructions
    var type_text = document.getElementById("instructions");
    type_text.innerHTML = typeText(beginner_advanced);
    
    // select text box to type after test starts
    var focus_on = document.getElementById("input").focus();

}

function typeText(beginner_advanced){
    var textString;

    // beginner string
    if(beginner_advanced === "0")
        textString = beginnerString();
    // advanced string
    else
        textString = advancedString();
    
    return textString;
}

function finished(){
    // stop time
    
     var stoptime = (new Date().getTime()-startTime)/1000;

    // check if correct
    var answer = checkAnswer();
    // pointer to display
    var display_results = document.getElementById("display");
    var oldImage = document.getElementById("image");

    // display results
    if(answer){
        oldImage.src = "images/thumbs_up.jpg"
        display_results.innerHTML = "Good Job! You entered the text correctly! \n nicely done.  It took " + stoptime.toFixed(2) + "seconds";
    }
    else{
        oldImage.src = "images/thumbs_down.jpg";
        display_results.innerHTML = "You did not spell it correctly";
    }
}

function checkAnswer(){
    // get text from input
    var answer = document.getElementById("instructions").innerHTML;

    // user input
    var input = document.getElementById("input").value;
    // check answer
    
    if(input === answer)
        return true;
    else
        return false;
}

function beginnerString(){
    // string to type
    var type_string;
    var randNum = Math.floor(Math.random()*10);
    var beginner = ["apple sauce", "pickle juice","helping hand", "doing good", "serve everyone","love everyone","hickup upside down", "run along","watch tv","find watch"];
    
    return beginner[randNum];
}

function advancedString(){
    // string to type
    var type_string;
    var randNum = Math.floor(Math.random()*10);

    var advanced = ["345 %apple sauce", "pickle $%& juice","391 helping hand", "63 &doing good", "serve 847 everyone","love 1239everyone","hickup ups2ide do5wn", "ru2n alon8g","wa9tch 5539tv","fin$5^d watch"];

    return advanced[randNum];
}

