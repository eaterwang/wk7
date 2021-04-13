var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width= 400
canvas.height= 400



// 黑色填滿方形
ctx.fillStyle="salmon"
ctx.fillRect(100,100,200,200)

ctx.fillRect(0,0,100,100)
ctx.fillRect(300,300,100,100)