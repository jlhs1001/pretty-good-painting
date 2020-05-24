let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let colorDisplay = document.getElementById("colorDisplay");

let RED = document.getElementById("RED");
let GREEN = document.getElementById("GREEN");
let BLUE = document.getElementById("BLUE");
let ALPHA = document.getElementById("ALPHA");

let redCount = document.getElementById("redCounter");
let greenCount = document.getElementById("greenCounter");
let blueCount = document.getElementById("blueCounter");
let alphaCount = document.getElementById("alphaCounter");

let brushSize = document.getElementById("brushSize");
let brushSizeCounter = document.getElementById("brushSizeCounter");


document.addEventListener('mousemove', logKey);


brush = {x: 0, y: 0, radius: brushSize.value};

function logKey(e) {
    brush.x = e.clientX - 5;
    brush.y = e.clientY - 50;
}

function mouseDownEvent() {
    ctx.fillStyle = `rgba(${RED.value}, ${GREEN.value}, ${BLUE.value}, ${ALPHA.value})`;
}

console.log(ALPHA.value);

function mouseUpEvent() {
    ctx.fillStyle = `rgba(0, 0, 0, 0)`;
}

function update(progress) {
    colorDisplay.style.backgroundColor = `rgba(${RED.value}, ${GREEN.value}, ${BLUE.value}, ${ALPHA.value})`;
    redCount.innerText = "R: " + RED.value;
    greenCount.innerText = "G: " + GREEN.value;
    blueCount.innerText = "B: " + BLUE.value;
    alphaCount.innerText = "opacity: " + ALPHA.value;
    brushSizeCounter.innerText = "Brush Size: " + brushSize.value;
    brush.radius = brushSize.value
}

function draw() {
    ctx.beginPath();
    ctx.arc(brush.x, brush.y, brush.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function loop(timestamp) {
    let progress = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}

let lastRender = 0;
window.requestAnimationFrame(loop);
