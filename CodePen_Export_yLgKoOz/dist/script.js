var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width= 400
canvas.height= 400

ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(300,100)
ctx.lineTo(300,300)
ctx.lineTo(100,300)
ctx.closePath()
ctx.stroke()