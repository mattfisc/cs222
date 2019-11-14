var $ = function (id){
    return document.getElementById(id);
};

// circle function
var circle = function circle(radius, colorString){
    this.radius = radius;
    this.colorString = colorString;
}




// circle object
var large = new circle(425, (0,60,0));
var medium = new circle(250,(0,80,0));
var small = new circle(100, (0,100,0));
var bulls_eye = [];

// pointers to divs
var large_div = $("large");
var medium_div = $("medium");
var small_div = $("small");


// slider change on slide
function set_color(value){
    
    // color string
    large_div.colorString = "(0," + (value-20) + ",0)";
    large_div.style.backgroundColor = "rgb"+large_div.colorString;

    // color string
    medium_div.colorString = "(0," + value + ",0)";
    medium_div.style.backgroundColor = "rgb"+medium_div.colorString;

    
    // color string
    small_div.colorString = "(0," + (value+20) + ",0)";
    small_div.style.backgroundColor = "rgb"+small_div.colorString;
}





// bulls eye location
var circle_location = [];





// button makes bulls eye
function display(){

    if (bulls_eye[0] == null){
        // construct large circle
        bulls_eye[0] = large;
        //paint 
        large_div.style.margin = "auto";
        large_div.style.width = bulls_eye[0].radius + "px";
        large_div.style.height =bulls_eye[0].radius + "px";
        large_div.style.backgroundColor = "rgb(0,60,0)";
        large_div.style.borderRadius = "50%";
        large_div.style.display = "flex";
        large_div.style.alignItems = "center";
        large_div.style.justifyContent = "center";


    }
    else if(bulls_eye[1] == null){
        // construct meduium  circle
        bulls_eye[1] = medium;
        //paint
        medium_div.style.width = bulls_eye[1].radius + "px";
        medium_div.style.height =bulls_eye[1].radius + "px";
        medium_div.style.backgroundColor = "rgb(0,80,0)";
        medium_div.style.borderRadius = "50%";
        medium_div.style.display = "flex";
        medium_div.style.alignItems = "center";
        medium_div.style.justifyContent = "center";
        
    }
    else if(bulls_eye[2] == null){
        // construct small circle
        bulls_eye[2] = small;
        //paint
        small_div.style.width = bulls_eye[2].radius + "px";
        small_div.style.height =bulls_eye[2].radius + "px";
        small_div.style.backgroundColor = "rgb(0,100,0)";
        small_div.style.borderRadius = "50%";
        
        
    }
    else{
        console.log("no more button pushing");
    }
}


