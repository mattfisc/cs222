

// intialize canvas
var canvas = document.getElementById('canvasElement');
var context = canvas.getContext('2d');

var title_status = document.getElementById("status");
var image = [];
var image_location = [0,1,2,3,4,5,6,7,8];
scramble();

// create memory for images
for(let i = 0;i < 9; i++)
    image[i] = new Image();

// images loaded
image[0].onload = function(){
    image[1].onload = function(){
        image[2].onload = function(){
            image[3].onload = function(){
                image[4].onload = function(){
                    image[5].onload = function(){
                        image[6].onload = function(){
                            image[7].onload = function(){
                                image[8].onload = function(){
                                    draw_game();
                                };
                                image[8].src = "images/ass6p8.png";
                            };
                            image[7].src = "images/ass6p7.png";
                        };
                        image[6].src = "images/ass6p6.png";
                    };
                    image[5].src = "images/ass6p5.png";
                };
                image[4].src = "images/ass6p4.png";
            };
            image[3].src = "images/ass6p3.png";
        };
        image[2].src = "images/ass6p2.png";
    };
    image[1].src = "images/ass6p1.png";
};
image[0].src = "images/ass6p0.png";

function draw_image(index, position){
    context.drawImage(image[index],(position%3)*144,Math.floor(position/3)*144);
}

function draw_game(){
    for (let i = 0; i < image_location.length; i++) {
        draw_image(image_location[i],i);
    }
}

// click function mousedown
function turn(event){
    var x = Math.floor(event.clientX / 144);
    var y = Math.floor(event.clientY / 144);
    
    // move
    if( x < 3 && y < 3){
        swap_tile(x+3*y);
    }
    
}

function swap_tile(position){
    // blank tile
    if(image_location[position] === 8)
        return ;
    
    var blankTile = -1;

    switch(position){
        // top row
        case 0:
            if(image_location[1] === 8)blankTile=1;
            else if(image_location[3] === 8)blankTile=3;
            break;
        case 1:
            if(image_location[0] === 8)blankTile=0;
            else if(image_location[2] === 8)blankTile=2;
            else if(image_location[4] === 8)blankTile=4;
            break;
        case 2:
            if(image_location[1] === 8)blankTile=1;
            else if(image_location[5] === 8)blankTile=5;
            break;
        // second row
        case 3:
            if(image_location[0] === 8)blankTile=0;
            else if(image_location[6] === 8)blankTile=6;
            else if(image_location[4] === 8)blankTile=4;
            break;
        case 4:
            if(image_location[1] === 8)blankTile=1;
            else if(image_location[3] === 8)blankTile=3;
            else if(image_location[5] === 8)blankTile=5;
            else if(image_location[7] === 8)blankTile=7;
            break;
        case 5:
            if(image_location[8] === 8)blankTile=8;
            else if(image_location[2] === 8)blankTile=2;
            else if(image_location[4] === 8)blankTile=4;
            break;
        // third row
        case 6:
            if(image_location[3] === 8)blankTile=3;
            else if(image_location[7] === 8)blankTile=7;
            break;
        case 7:
            if(image_location[4] === 8)blankTile=4;
            else if(image_location[6] === 8)blankTile=6;
            else if(image_location[8] === 8)blankTile=8;
            break;
        case 8:
            if(image_location[5] === 8)blankTile=5;
            else if(image_location[7] === 8)blankTile=7;
            break;

    }
    
    //swap tile
    if(blankTile > -1){
        var temp = image_location[position];
        image_location[position] = image_location[blankTile];
        image_location[blankTile] = temp;
        draw_game();
        win_check();
    }
}

// check win
function win_check(){
    var win = true;
    for (var index = 0; index < image_location.length; index++) {
        if(image_location[index] !== index)
            win = false;
        
    }
    // change title with win check
    if(win)
        alert("The puzzle is complete!");
    else
        title_status.innerHTML = "The puzzle is NOT complete";
}

function scramble(){

    for (let index = 0; index < image_location.length; index++) {
        var num1 = Math.floor(Math.random()*10);
        var num2 = Math.floor(Math.random()*10);
        // only numbers 0-8
        while(num1 > 8 || num2 > 8){
            num1 = Math.floor(Math.random()*10);
            num2 = Math.floor(Math.random()*10);
        }
        // swap
        var temp = image_location[num1];
        image_location[num1] = image_location[num2];
        image_location[num2] = temp;
    }
}