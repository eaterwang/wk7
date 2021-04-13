var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width= 500
canvas.height= 500

ctx.fillStyle="black"
ctx.fillRect(0,0,500,500)

ctx.fillStyle="red"
ctx.fillRect(0,0,100,100)
ctx.fillStyle="orange"
ctx.fillRect(100,100,150,150)
ctx.fillStyle="green"
ctx.fillRect(250,250,250,250)