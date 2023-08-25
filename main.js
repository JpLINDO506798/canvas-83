var canvas =document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var lastpositionX,lastpositionY;
var color ="green";
var width =screen.width;
var novalargura=screen.width -100;
var novaaltura =screen.height -300;
if (width<992){
    document.getElementById("canvas").width=novalargura;
    document.getElementById("canvas").height=novaaltura;
}
canvas.addEventListener("touchstart",click);
function click(e){
lastpositionX=e.touches[0].clientX-canvas.offsetLeft;
lastpositionY=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",movendo);
function movendo (e){
    var mousex = e.touches[0].clientX-canvas.offsetLeft;
    var mousey = e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.moveTo(lastpositionX,lastpositionY);
    ctx.lineTo(mousex,mousey);
    ctx.stroke();

lastpositionX=mousex;
lastpositionY=mousey;
}















































































