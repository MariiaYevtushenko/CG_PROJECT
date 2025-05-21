
var canvas = document.getElementById("canvas-board");
var c = canvas.getContext("2d");

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 1024;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;


var CENTER_X  =  CANVAS_WIDTH/2;
var CENTER_Y  = CANVAS_HEIGHT/2;

var STEP = 100;

// ОЧИЩЕННЯ КАНВИ
function ReDrawBoard() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawCoordinateBoard();
  }
  // СИСТЕМА КООРДИНАТ
  // function drawCoordinateBoard() {
  //   console.log("Draw coordinate board/ STEP = " + STEP);
  //   // клітинки
  //   c.globalAlpha = 0.25;
  //   c.strokeStyle = "#aaaaaa";
  //   c.lineWidth = 2;
  
  //   var numDivision = Math.floor(canvas.width / STEP);
  //   numDivision =
  //     Math.floor(canvas.width / STEP) % 2 == 0 ? numDivision : numDivision - 1;
  
  //   var startPoint = (canvas.width - numDivision * STEP) / 2;
  
  //   for (var x = startPoint; x < CANVAS_WIDTH; x += STEP) {
  //     c.beginPath();
  //     c.moveTo(x, 0);
  //     c.lineTo(x, CANVAS_HEIGHT);
  //     c.stroke();
  //     console.log(" x= " + x);
  //   }
  
  //   for (var y = startPoint; y < CANVAS_HEIGHT; y += STEP) {
  //     c.beginPath();
  //     c.moveTo(0, y);
  //     c.lineTo(CANVAS_WIDTH, y);
  //     c.stroke();
  //   }
  
  //   //Осі X Y
  //   c.globalAlpha = 0.25;
  //   c.strokeStyle = "black";
  //   c.lineWidth = 2;
  //   c.beginPath();
  //   c.moveTo(0, CENTER_Y);
  //   c.lineTo(canvas.width, CENTER_Y);
  //   c.moveTo(CENTER_X, 0);
  //   c.lineTo(CENTER_X, canvas.height);
  //   c.stroke();
  
  //   //Стрілки на осі X Y
  //   c.beginPath();
  //   c.moveTo(canvas.width - 10, CENTER_Y - 5);
  //   c.lineTo(canvas.width, CENTER_Y);
  //   c.lineTo(canvas.width - 10, CENTER_Y + 5);
  //   c.stroke();
  
  //   c.beginPath();
  //   c.moveTo(CENTER_X - 5, 10);
  //   c.lineTo(CENTER_X, 0);
  //   c.lineTo(CENTER_X + 5, 10);
  //   c.stroke();
  
  //   //Надписи X Y
  //   c.globalAlpha = 1;
  //   c.font = "bold 12px Arial";
  //   c.fillStyle = "black";
  //   c.fillText("X", canvas.width - 15, CENTER_Y - 10);
  //   c.fillText("Y", CENTER_X + 15, 15);
  
  //   //Поділки на осях
  //   c.font = "8px Arial";
  //   c.lineWidth = 1;
  //   c.textAlign = "center";
  //   c.textBaseline = "middle";
  //   // по x
  //   for (var i = -CANVAS_WIDTH + 2 * startPoint; i < CENTER_X; i += STEP) {
  //     if (i !== 0) {
  //       c.beginPath();
  //       c.moveTo(CENTER_X + i, CENTER_Y - 5);
  //       c.lineTo(CENTER_X + i, CENTER_Y + 5);
  //       c.stroke();
  //       c.fillText(Math.floor(i / STEP), CENTER_X + i, CENTER_Y + 15);
  //     }
  //   }
  
  //   // по y
  //   for (var j = -CENTER_Y + startPoint; j < CENTER_Y; j += STEP) {
  //     if (j !== 0 && CENTER_Y - j < canvas.height) {
  //       c.beginPath();
  //       c.moveTo(CENTER_X - 5, CENTER_Y + j);
  //       c.lineTo(CENTER_X + 5, CENTER_Y + j);
  //       c.stroke();
  //       c.fillText(Math.round(-j / STEP), CENTER_X - 15, CENTER_Y + j);
  //     }
  //   }
  
  //   c.fillText(0, CENTER_X - 10, CENTER_Y + 10);
  // }

  // function drawCoordinateBoard() {
  //   console.log("Draw coordinate board / STEP = " + STEP);
  //   c.clearRect(0, 0, canvas.width, canvas.height);
  
  //   c.globalAlpha = 0.25;
  //   c.strokeStyle = "#aaaaaa";
  //   c.lineWidth = 1;
  
  //   // Клітинки
  //   for (let x = 0; x <= canvas.width; x += STEP) {
  //     c.beginPath();
  //     c.moveTo(x, 0);
  //     c.lineTo(x, canvas.height);
  //     c.stroke();
  //   }
  
  //   for (let y = 0; y <= canvas.height; y += STEP) {
  //     c.beginPath();
  //     c.moveTo(0, y);
  //     c.lineTo(canvas.width, y);
  //     c.stroke();
  //   }
  
  //   // Осі X та Y
  //   c.globalAlpha = 0.5;
  //   c.strokeStyle = "black";
  //   c.lineWidth = 2;
  
  //   // Oсь X
  //   c.beginPath();
  //   c.moveTo(0, canvas.height);
  //   c.lineTo(canvas.width, canvas.height);
  //   c.stroke();
  
  //   // Oсь Y
  //   c.beginPath();
  //   c.moveTo(0, canvas.height);
  //   c.lineTo(0, 0);
  //   c.stroke();
  
  //   // Стрілки
  //   c.beginPath();
  //   c.moveTo(canvas.width - 10, canvas.height - 5);
  //   c.lineTo(canvas.width, canvas.height);
  //   c.lineTo(canvas.width - 10, canvas.height + 5);
  //   c.stroke();
  
  //   c.beginPath();
  //   c.moveTo(5, 10);
  //   c.lineTo(0, 0);
  //   c.lineTo(-5, 10);
  //   c.stroke();
  
  //   // Надписи X, Y
  //   c.globalAlpha = 1;
  //   c.font = "bold 16px Arial";
  //   c.fillStyle = "black";
  //   c.fillText("X", canvas.width - 15, canvas.height - 10);
  //   c.fillText("Y", 10, 10);
  
  //   // Поділки та цифри
  //   c.font = "16px Arial";
  //   c.textAlign = "center";
  //   c.textBaseline = "middle";
  
  //   // Поділки по X
  //   for (let x = STEP; x < canvas.width; x += STEP) {
  //     c.beginPath();
  //     c.moveTo(x, canvas.height - 5);
  //     c.lineTo(x, canvas.height + 5);
  //     c.stroke();
  //     c.fillText(x / STEP, x, canvas.height - 15);
  //   }
  
  //   // Поділки по Y
  //   for (let y = canvas.height - STEP; y > 0; y -= STEP) {
  //     c.beginPath();
  //     c.moveTo(-5, y);
  //     c.lineTo(5, y);
  //     c.stroke();
  //     c.fillText((canvas.height - y) / STEP, 15, y);
  //   }
  
  //   // Нуль
  //   c.fillText("0", 10, canvas.height - 10);
  // }
  
  function drawCoordinateBoard() {
    console.log("Draw coordinate board / STEP = " + STEP);
    c.clearRect(0, 0, canvas.width, canvas.height);
  
    // Клітинки
    c.globalAlpha = 0.25;
    c.strokeStyle = "#aaaaaa";
    c.lineWidth = 1;
  
    for (let x = 0; x <= canvas.width; x += STEP) {
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x, canvas.height);
      c.stroke();
    }
  
    for (let y = canvas.height; y >=0; y -=STEP) {
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(canvas.width, y);
      c.stroke();
    }
  
    // Осі
    c.globalAlpha = 0.5;
    c.strokeStyle = "black";
    c.lineWidth = 2;
  
    // Oсь X (знизу)
    c.beginPath();
    c.moveTo(0, canvas.height - 0.5); // трішки вище, щоб не зливалося
    c.lineTo(canvas.width, canvas.height - 0.5);
    c.stroke();
  
    // Oсь Y (зліва)
    c.beginPath();
    c.moveTo(0.5, 0);
    c.lineTo(0.5, canvas.height);
    c.stroke();
  
    // Стрілки
    c.beginPath();
    c.moveTo(canvas.width - 10, canvas.height - 5);
    c.lineTo(canvas.width, canvas.height);
    c.lineTo(canvas.width - 10, canvas.height + 5); // майже не видно — можна не малювати
    c.stroke();
  
    c.beginPath();
    c.moveTo(5, 10);
    c.lineTo(0, 0);
    c.lineTo(-5, 10);
    c.stroke();
  
    // Надписи
    c.globalAlpha = 1;
    c.font = "bold 16px Arial";
    c.fillStyle = "black";
    c.fillText("X", canvas.width - 15, canvas.height - 10);
    c.fillText("Y", 15, 15);
  
    // Поділки та цифри
    c.font = "12px Arial";
    c.textAlign = "center";
    c.textBaseline = "middle";
  
    // Поділки по X
    for (let x = STEP; x < canvas.width; x += STEP) {
      c.beginPath();
      c.moveTo(x, canvas.height - 5);
      c.lineTo(x, canvas.height + 5);
      c.stroke();
      c.fillText(x / STEP, x, canvas.height - 15);
    }
  
    // Поділки по Y
    for (let y = STEP; y < canvas.height; y += STEP) {
      c.beginPath();
      c.moveTo(-5, canvas.height - y);
      c.lineTo(5, canvas.height - y);
      c.stroke();
      c.fillText(y / STEP, 15, canvas.height - y);
    }
  
    // Нуль
    c.fillText("0", 10, canvas.height - 10);
  }
  

  console.log("Draw before");
  drawCoordinateBoard();
  
  console.log("Draw after");
  c.globalAlpha = 1;


function DrawHouse(){

// Стіни
c.fillStyle = "#d3d3d3"; 
c.fillRect( STEP*3, canvas.height-STEP*5, STEP*4, STEP*3); 

// Дах
c.beginPath();
c.moveTo(STEP*2, canvas.height-STEP*5);     
c.lineTo(STEP*5, canvas.height-STEP*7);     
c.lineTo(STEP*8, canvas.height-STEP*5); 
c.closePath();

c.fillStyle = "#a52a2a";
c.fill();

// Двері
c.fillStyle = "#654321"; 
c.fillRect(STEP*4, canvas.height - STEP*4, STEP, STEP*2);

//  Вікно
c.fillStyle = "#87ceeb"; 
c.fillRect(STEP*5.5, canvas.height - STEP*4, STEP, STEP);

//Трава
c.fillStyle = "green";
c.fillRect(0, canvas.height - STEP*2, canvas.width, STEP);
}

// ДІМ ПРО 
// // Стиль і розмітка полотна залишаються
// c.clearRect(0, 0, canvas.width, canvas.height);

// // Малюємо стіни (прямокутник)
// c.fillStyle = "#d3d3d3"; // колір стін
// c.fillRect(STEP*3, canvas.height - STEP*5, STEP*4, STEP*4); // x, y, ширина, висота

// // Малюємо дах (трикутник)
// c.beginPath();
// c.moveTo(STEP*2, canvas.height - STEP*5);
// c.lineTo(STEP*5, canvas.height - STEP*7);
// c.lineTo(STEP*8, canvas.height - STEP*5);
// c.closePath();
// c.fillStyle = "#a52a2a"; // коричневий дах
// c.fill();

// // 🚪 Двері
// c.fillStyle = "#654321"; // темно-коричневий
// c.fillRect(STEP*4.5, canvas.height - STEP*2, STEP, STEP*2);

// // Ручка на дверях
// c.beginPath();
// c.arc(STEP*5.4, canvas.height - STEP, 3, 0, 2 * Math.PI);
// c.fillStyle = "gold";
// c.fill();

// // 🪟 Вікна (2 штуки)
// c.fillStyle = "#87ceeb"; // блакитний
// c.fillRect(STEP*3.2, canvas.height - STEP*4, STEP, STEP);
// c.fillRect(STEP*5.8, canvas.height - STEP*4, STEP, STEP);

// // Розділення вікон
// c.strokeStyle = "#ffffff";
// c.lineWidth = 2;
// c.beginPath();
// c.moveTo(STEP*3.2 + STEP/2, canvas.height - STEP*4);
// c.lineTo(STEP*3.2 + STEP/2, canvas.height - STEP*3);
// c.moveTo(STEP*3.2, canvas.height - STEP*3.5);
// c.lineTo(STEP*4.2, canvas.height - STEP*3.5);
// c.stroke();

// c.beginPath();
// c.moveTo(STEP*5.8 + STEP/2, canvas.height - STEP*4);
// c.lineTo(STEP*5.8 + STEP/2, canvas.height - STEP*3);
// c.moveTo(STEP*5.8, canvas.height - STEP*3.5);
// c.lineTo(STEP*6.8, canvas.height - STEP*3.5);
// c.stroke();

// // 🌿 Трава
// c.fillStyle = "green";
// c.fillRect(0, canvas.height - STEP, canvas.width, STEP);

// // ☀ Сонце
// c.beginPath();
// c.arc(STEP*1, STEP, STEP, 0, Math.PI * 2);
// c.fillStyle = "yellow";
// c.fill();

// // Димар
// c.fillStyle = "#444";
// c.fillRect(STEP*6.5, canvas.height - STEP*6.5, STEP/2, STEP);

// // Дим (кола)
// c.globalAlpha = 0.3;
// c.fillStyle = "grey";
// c.beginPath();
// c.arc(STEP*6.75, canvas.height - STEP*7, 8, 0, Math.PI * 2);
// c.fill();
// c.beginPath();
// c.arc(STEP*6.8, canvas.height - STEP*7.5, 10, 0, Math.PI * 2);
// c.fill();
// c.globalAlpha = 1;



