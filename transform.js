var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const COLUMNS = 128;
const SPACE = Math.trunc((2 * window.innerWidth + COLUMNS)/COLUMNS);
const ROWS = Math.trunc((2 * window.innerHeight + COLUMNS)/SPACE);
const GRID_INTERVAL = 4;
let init_vectors = [];

function initialize_grid(){
    for(var j = 0; j < ROWS; j++){
      for(var i = 0; i < COLUMNS; i++){
        let point = {
          x: (i * SPACE) - window.innerWidth/2,
          y: (j * SPACE) - window.innerHeight/2
        };
        init_vectors.push(point);
      }
  }
}

function render(){
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.moveTo(init_vectors[0].x + window.innerWidth/2, init_vectors[0].y + window.innerHeight/2);
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#FFFFFF";

  for(let j = 0; j < ROWS; j++){
    ctx.moveTo(init_vectors[j * COLUMNS].x + window.innerWidth/2, init_vectors[j * COLUMNS].y + window.innerHeight/2);
    for(let i = 1; i < COLUMNS; i++){
      ctx.lineTo(init_vectors[j * COLUMNS + i].x + window.innerWidth/2, init_vectors[j * COLUMNS + i].y + window.innerHeight/2);
    }
    ctx.stroke();
  }


  ctx.moveTo(init_vectors[0].x, init_vectors[0].y);
  ctx.beginPath();
  for(let j = 0; j < COLUMNS; j++){
    ctx.moveTo(init_vectors[j].x + window.innerWidth/2, init_vectors[j].y + window.innerHeight/2);
    for(let i = 1; i < ROWS; i++){
      let row = i * COLUMNS;
      ctx.lineTo(init_vectors[row + j].x + window.innerWidth/2, init_vectors[row + j].y + window.innerWidth/2);
    }
    ctx.stroke();
  }
}

function main(){
  for(var t = 0; t < init_vectors.length; t++){
    init_vectors[t].x = init_vectors[t].x * 3 + init_vectors[t].y;
    init_vectors[t].y = init_vectors[t].y * -2 + init_vectors[t].x;
  }
  render();
}

initialize_grid();
//setInterval(main, 1);
main();
