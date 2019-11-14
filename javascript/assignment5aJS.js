

var $ = function (id){
    return document.getElementById(id);
};

function display(){
    var num = $("units").value;
    var label = $("units_label");
    var display_label = $("output");
    if(label == "Inches"){
        display_label.innerHTML = num + " Inches converted to " + (num * 2.54).toFixed(2) + " Centimeters";
    }
    else{
        display_label.innerHTML = num + " Centimeters converted to " + (num / 2.54).toFixed(2) + " Inches";
    }



}

function unit_select(id){
    var label = $("units_label");

    
    if(id == "inches"){
        label.innerHTML = "Centimeters";
    }
    else{
        label.innerHTML = "Inches";
    }
}