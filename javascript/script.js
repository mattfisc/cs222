
var $ = function (id) {
    return document.getElementById(id)
};

window.onload = function () {
    $("matrix").innerHTML = drawMatrix();

};



function drawMatrix(){
    var my_matrix = [10][10];

    var variable = 1;
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            my_matrix[i][j] = variable;
            variable++;
        }
    }
    console.log(my_matrix[0][0]);

    for(var i = 0; i < my_matrix.length; i++){
        for(var j = 0; j < my_matrix[0].length; j++){
            my_matrix[i][j] = variable;
            console.log(my_matrix[i][j]);
        }
    }
    return my_matrix;
}



