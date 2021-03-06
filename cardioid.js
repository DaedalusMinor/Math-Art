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
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = 'white';
	ctx.strokeStyle = 'black';

	ctx.lineWidth = 3;

	var vert = 100;
	var horiz = 250;

    for(var angle=0; angle <2*Math.PI;angle+=0.01){
		var x = -1 * (100*Math.cos(4*angle) - 100*Math.sin(2*angle) + 4);
		var y = 100*Math.sin(4*angle) + 100*Math.cos(2*angle);
		if(angle == 0){
			ctx.moveTo(x+xCord,y+yCord);
		}
		ctx.lineTo(x+xCord,y+yCord);
    }
	
	ctx.stroke();
	ctx.moveTo(xCord-110,yCord);
	ctx.lineTo(xCord-110,yCord + vert * 2);
	ctx.lineTo(xCord-110,yCord - vert * 2);
	ctx.moveTo(xCord-110,yCord);
	ctx.lineTo(xCord-(horiz+20),yCord)
	ctx.lineTo(xCord+(horiz+20),yCord)
	ctx.stroke();
	ctx.font = "italic 20pt Times New Roman";
	ctx.fillStyle = 'black';
	ctx.fillText("y", xCord-115, yCord - (vert+115));
	ctx.fillText("x", xCord + (horiz+30), yCord+5);
	ctx.lineWidth = 2;
	ctx.moveTo(xCord + (horiz/2 + 10)- 110, yCord);
	ctx.lineTo(xCord + (horiz/2 + 10) - 110,yCord+7);
	ctx.lineTo(xCord + (horiz/2 + 10) - 110, yCord-7);
	ctx.moveTo(xCord - (horiz/2 + 10) - 110, yCord);
	ctx.lineTo(xCord - (horiz/2 + 10) - 110, yCord+7);
	ctx.lineTo(xCord - (horiz/2 + 10) - 110, yCord-7);
	ctx.stroke();
	ctx.font = "20pt Times New Roman";
	ctx.fillText("C    A    R    D    I    O    I    D", xCord-155, yCord+vert+135);
	
}//self invoking function