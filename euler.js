window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	setInterval(main, 2000);
}

class Node{

	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.color = "white";
		this.colorNum = 0;
		this.degree = 0;
		this.incidenceEdges = [];
		this.adjacentNodes = [];
	}

	render()
	{
		ctx.fillStyle=this.color;
		ctx.moveTo(this.x + 500, this.y + 150);
		ctx.arc(this.x + 500, this.y + 150, 8, 10, 0, 2 * Math.PI);
		ctx.fill();
	}

	addIncidentEdge(edge)
	{
			this.incidenceEdges.push(edge);
			this.degree = this.incidenceEdges.length;
			this.addAdjacentNodes();
	}

	addIncidentEdges(edges)
	{
		for ( e in edges){
			this.incidenceEdges.push(e);
		}
		this.degree = this.incidenceEdges.length;
		this.addAdjacentNodes();
	}

	addAdjacentNodes(){
		for (e in this.incidentEdges){
			if (e.node1 != this) {
				this.adjacentNodes.push(e.node1);
			}
			else if (e.node2 != this){
				this.adjacentNodes.push(e.node2);
			}
		}
	}
}

class Edge{
	constructor(node1, node2){
		this.node1 = node1;
		this.node2 = node2;
		this.color = "white";

		this.node1.addIncidentEdge(this);
		this.node2.addIncidentEdge(this);
	}

	render(){
		ctx.lineWidth = 4;
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.node1.x + 500, this.node1.y + 150);
		ctx.lineTo(this.node2.x + 500, this.node2.y + 150);
		ctx.stroke();
	}

	getNodePair(){
		return [this.node1, this.node2];
	}
}

function numToColor(node){
	switch(node.colorNum){
		case 1:
			node.color = "FF0000";
			break;
		case 2:
			node.color = "00FF00";
			break;
		case 3:
			node.color = "0000FF";
			break;
		case 4:
			node.color = "FFFF00";
			break;
		case 5:
			node.color = "00FFFF";
			break;
		case 6:
			node.color = "FF00FF";
			break;
		case 7:
			node.color = "#FF8C00";
			break;
		case 8:
			node.color = "#FF1493";
			break;
		default:
			node.color = "#000000";
	}

}

var edgeArray = [];
var nodeArray = [];
var xShrink = 5;
var yShrink = 2;
nodeArray.push(new Node (1000/xShrink, 200/yShrink));
nodeArray.push(new Node (200/xShrink, 100/yShrink));
nodeArray.push(new Node(500/xShrink, 200/yShrink));
nodeArray.push(new Node(600/xShrink, 400/yShrink));
nodeArray.push(new Node(300/xShrink, 400/yShrink));
nodeArray.push(new Node(550/xShrink, 100/yShrink));
nodeArray.push(new Node(700/xShrink, 300/yShrink));
nodeArray.push(new Node(450/xShrink, 600/yShrink));
nodeArray.push(new Node(650/xShrink, 650/yShrink));

edgeArray.push(new Edge(nodeArray[0], nodeArray[2]));
edgeArray.push(new Edge(nodeArray[3], nodeArray[2]));
edgeArray.push(new Edge(nodeArray[1], nodeArray[2]));
edgeArray.push(new Edge(nodeArray[4], nodeArray[3]));
edgeArray.push(new Edge(nodeArray[2], nodeArray[5]));
edgeArray.push(new Edge(nodeArray[4], nodeArray[2]));
edgeArray.push(new Edge(nodeArray[0], nodeArray[6]));
edgeArray.push(new Edge(nodeArray[3], nodeArray[6]));
edgeArray.push(new Edge(nodeArray[2], nodeArray[6]));
edgeArray.push(new Edge(nodeArray[3], nodeArray[7]));
edgeArray.push(new Edge(nodeArray[3], nodeArray[8]));
var nodeIndex = 0;

function main()
{
	if(nodeIndex < nodeArray.length){
		var selectedNode = nodeArray[nodeIndex];
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.lineWith = 1;
		for (var i = 0; i < nodeArray.length; i++){
			nodeArray[i].render();
		}

		for (var i = 0; i < edgeArray.length; i++){
			edgeArray[i].render();
		}

		ctx.fillStyle = "white";
		ctx.font = "20pt Times New Roman";
		ctx.fillText("E   U   L   E   R", window.innerWidth/2, window.innerHeight/2);
	}
}
