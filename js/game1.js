var canvas = document.getElementById("game1");
var dt = canvas.getContext("2d");

window.setInterval(draw, 33);
var i = 0;
function draw(){
    dt.fillStyle = "white";
    dt.fillRect(0,0,innerWidth, outerHeight);
    dt.fillStyle = "red";
    dt.fillRect(i,i,50,50);
    i++;
}

//It finally fucking works