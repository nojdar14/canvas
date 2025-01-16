// Intro to Drawing in the Canvas

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
let fire = document.getElementById("fire");
let star = document.getElementById("star");
cnv.width = 700;
cnv.height = 600;

// Set background
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

//floor
ctx.fillStyle = "green";
ctx.fillRect(0, 500, 700, 600);
//star
ctx.drawImage(star, 40, 100, 30, 30);
ctx.drawImage(star, 540, 140, 30, 30);
ctx.drawImage(star, 440, 90, 30, 30);
ctx.drawImage(star, 340, 160, 30, 30);
ctx.drawImage(star, 240, 190, 30, 30);
ctx.drawImage(star, 140, 50, 30, 30);

//tent
ctx.fillStyle = "lightblue";
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(260, 290);
ctx.lineTo(360, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(260, 290);
ctx.lineTo(360, 500);
ctx.fill();

ctx.beginPath();
ctx.moveTo(260, 500);
ctx.lineTo(260, 290);
ctx.stroke();

//tree
ctx.fillStyle = "brown";
ctx.fillRect(50, 350, 50, 190);

ctx.fillStyle = "darkgreen";
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.moveTo(68, 230);
ctx.lineTo(0, 380);
ctx.lineTo(150, 380);
ctx.lineTo(70, 230);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(68, 230);
ctx.lineTo(0, 380);
ctx.lineTo(150, 380);
ctx.lineTo(70, 230);
ctx.fill();

//moon
ctx.fillStyle = "lightgray";
ctx.beginPath();
ctx.arc(70, 70, 40, 2, 1.5 * Math.PI);
ctx.fill();

//fire place
ctx.fillStyle = "#962b08";
ctx.fillRect(470, 480, 100, 20);

ctx.strokeStyle = "gray";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(470, 480);
ctx.lineTo(470, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 490);
ctx.lineTo(570, 490);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(570, 480);
ctx.lineTo(570, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 480);
ctx.lineTo(550, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(530, 480);
ctx.lineTo(530, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(510, 480);
ctx.lineTo(510, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(490, 480);
ctx.lineTo(490, 500);
ctx.stroke();

// Fire
ctx.drawImage(fire, 475, 415, 90, 70);

//wood

ctx.fillStyle = "#A1662F";
ctx.fillRect(420, 530, 200, 35);

ctx.fillStyle = "#A1662F";
ctx.fillRect(400, 465, 40, 35);

ctx.fillStyle = "#A1662F";
ctx.fillRect(620, 465, 40, 35);

//man
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(610, 495);
ctx.lineTo(610, 465);
ctx.lineTo(630, 465);
ctx.lineTo(630, 413);
ctx.stroke();
//head
ctx.beginPath();
ctx.arc(630, 400, 15, 0, 2 * Math.PI);
ctx.stroke();
//arms
ctx.beginPath();
ctx.moveTo(630, 435);
ctx.lineTo(610, 465);
ctx.stroke();
