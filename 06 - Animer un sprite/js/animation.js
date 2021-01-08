let ctx = null;
let spriteList = [];

let leftArrowOn = false;
let rightArrowOn = false;

window.addEventListener("load", () => {
	ctx = document.getElementById("canvas").getContext("2d");

	spriteList.push(new Skeleton());

	tick();
});

const tick = () => {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 600, 500);

	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}

document.addEventListener("keydown", e => {
	if (e.which == 37) leftArrowOn = true;
	else if (e.which == 39) rightArrowOn = true;
});

document.addEventListener("keyup", e => {
	if (e.which == 37) leftArrowOn = false;
	else if (e.which == 39) rightArrowOn = false;
});