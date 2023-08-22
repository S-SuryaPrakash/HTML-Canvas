const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//fill rect
// ctx.fillStyle='red';
// ctx.fillRect(20,20,150,150);

// //strokeRect
// ctx.lineWidth=5;
// ctx.strokeStyle='green';
// ctx.strokeRect(200,20,150,100);

// //clearRect
// ctx.clearRect(25,25,140,140)

// //fillText()
// ctx.fillStyle='purple';
// ctx.fillText('Hello world',400,50)

// // strokeText
// ctx.lineWidth=1;
// ctx.strokeStyle='#ff3678' ;  //#ff3678 is a hex color code
// ctx.font="italic bold 20px serif";   //'serif','sans-serif','cursive','fantasy','monospace'.
// ctx.strokeText('Hello world',400,100)

// // Paths
// ctx.beginPath();
// ctx.moveTo(50,50);

//made a smiley face
ctx.beginPath();
// ctx.strokeStyle='white'
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
//face
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2, true);
// mouth
ctx.moveTo(centerX + 100, centerY);
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
//left eye
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2, false);
// right eye
ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2, false);
ctx.stroke();


//Quadratic curves
// Syntax:-quadraticCurveTO(cp1x,cp1y,x,y) there will be a point for the curve through which we can adjust

//Bezier curve
// Syntax:-bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) here we will have two points to alter the curve hence it takes two co-ordinates of x and y
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();   