var $ = function (id){
    return document.getElementById(id);
};

function calculate(){
    var table = document.getElementById("display");
    // get fields
    var miles = $("miles").value;
    miles = parseInt(miles);

    var time = $("time").value;
    var pace = time.split(":");
    var min = pace[0];
    var sec = pace[1];

    var minX = parseFloat(min).toFixed(2);
    var secX = parseFloat(sec);
    minX *=60;
    var totalSec = (secX + minX) / miles;
    
    minX = Math.floor(totalSec / 60);
    secX = totalSec % 60;
   
    var displayMin = 0;
    var displaySec = 0;

    // create row
    for(var i = 1; i <= miles;i++){
        var newRow = table.insertRow(i);
        // miles
        var cell1 = newRow.insertCell("0");
        cell1.innerHTML = i;
        // pace
        var cell2 = newRow.insertCell("1");
        
        displayMin += minX;
        displaySec += secX;
        
        
        if(displaySec >= 60){
            displayMin+=displaySec/60;
            displaySec = displaySec % 60;
            displaySec.toFixed(0);
        }
        else if(displaySec == 0){
            displaySec = 00;
        }
        else if(displaySec < 10){
            displaySec+="0";
        }
    


        // add cell2 to table
        cell2.innerHTML = displayMin.toFixed(0) + ":" + displaySec.toFixed(0);
        
    

    }
    

    
}