var ctx = null;

var mouseX = 0;
var mouseY = 0;
var spriteList = [];

window.onload = function () {

	tick()
}

function tick() {

	window.requestAnimationFrame(tick);
}