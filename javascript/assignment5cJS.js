
function drawIt() {
    var canvas = document.getElementById('canvasElement');
    var canvasContext = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = 650;
  
    //DRAW ON THE CANVAS
    initializeCurve (canvas, canvasContext);
  }
  
  function initializeCurve(canvas, canvasContext) {
    //TASK 1: get the level from the ui
    var level = document.getElementById('nLevels').value;
  
    //TASK 1: SET THE BEGINNING XY AND ENDING XY POINTS
    var y1 = canvas.height / 6;
    var x1 = canvas.width - canvas.width/3;
    var y2 = canvas.height / 2;
    var x2 = x1;
  
    //TASK 3: CALL THE RECURSIVE FUNCTION TO DRAW THE CURVE
    drawCurve(canvasContext, x1, y1, x2, y2, level);
  }
  function drawCurve(canvasContext, x1, y1, x2, y2, level){
    canvasContext.strokeStyle = "#FF0000";
    if (level <= 1) {
      canvasContext.beginPath();
      canvasContext.moveTo(x1, y1);
      canvasContext.lineTo(x2, y2);
      canvasContext.stroke();
    }
    else {
      //compute the new POINT
      var xn = (x1 + x2) / 2 + (y1 - y2) / 2;
      var yn = (y1 + y2) / 2 + (x2 - x1) / 2;
      drawCurve(canvasContext, x1, y1, xn, yn, level - 1);
      drawCurve(canvasContext, xn, yn, x2, y2, level - 1);
    }
  }
  