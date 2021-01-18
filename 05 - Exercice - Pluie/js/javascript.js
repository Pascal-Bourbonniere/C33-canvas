window.onload = initialize;

var ctx = null;
var background = new Image();
var rainDropList = new Array();

function initialize() {
	ctx = document.getElementById('canvas').getContext("2d");
	
	background.onload = tick;
	background.src = "images/landscape.png";
	
}

function tick() {
	ctx.drawImage(background, 0, 0, 500, 300);
	
	if (Math.random() < 0.5) {
		rainDropList.push(new RainDrop());
	}
	
	for (var i = 0; i < rainDropList.length; i++) {
		var toRemove = rainDropList[i].tick();
		
		if (toRemove) {
			rainDropList.splice(i, 1);
			i--;
		}
	}
	
	setTimeout(tick, 30);
}

function RainDrop() {
	this.x = Math.random() * 500;
	this.y = Math.random() * -10;
	this.size = Math.random() * 6;
	this.speed = 0.3;
	
	this.tick = function () {
		ctx.fillStyle = "rgba(30, 30, 220, 0.8)";
		ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
		
		this.y += this.size/2;
		
		return this.y > 300;
	}
}





