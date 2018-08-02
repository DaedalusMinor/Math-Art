window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	main();
}
function main(){
	
	var xCord= window.innerWidth/2;
	var yCord = window.innerHeight/2;
    ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = 'black';
	ctx.strokeStyle = 'white';
    ctx.moveTo(xCord,yCord);
	ctx.lineWidth = 3;
			
	var vert = 100;
	var horiz = 300;

    for(var angle=0; angle <2*Math.PI;angle+=0.01){
		var x = (horiz)*Math.cos(2* angle);
		var y = (vert)*Math.sin(4* angle);
		ctx.lineTo(x+xCord,y+yCord);
    }
	
	ctx.stroke();
	ctx.moveTo(xCord,yCord);
	ctx.lineTo(xCord,yCord + vert);
	ctx.lineTo(xCord,yCord - vert);
	ctx.moveTo(xCord,yCord);
	ctx.lineTo(xCord-(horiz+20),yCord)
	ctx.lineTo(xCord+(horiz+20),yCord)
	ctx.stroke();
	ctx.font = "italic 20pt Times New Roman";
	ctx.fillStyle = 'white';
	ctx.fillText("y", xCord-5, yCord - (vert+10));
	ctx.fillText("x", xCord + (horiz+30), yCord+5);
	ctx.lineWidth = 2;
	ctx.moveTo(xCord + (horiz/2 + 10), yCord);
	ctx.lineTo(xCord + (horiz/2 + 10),yCord+7);
	ctx.lineTo(xCord + (horiz/2 + 10), yCord-7);
	ctx.moveTo(xCord - (horiz/2 + 10), yCord);
	ctx.lineTo(xCord - (horiz/2 + 10), yCord+7);
	ctx.lineTo(xCord - (horiz/2 + 10), yCord-7);
	ctx.stroke();
	ctx.font = "20pt Times New Roman";
	ctx.fillText("L   E   M   N   I   S   C   A   T   E", xCord-170, yCord+vert+40);
	
}//self invoking function
