let ctx = null;

let mouseX = 0;
let mouseY = 0;
let spriteList = [];

window.addEventListener('load', () => {
    ctx = document.getElementById('canvas').getContext("2d")
    spriteList.push(new Square(0,0,100))
    document.getElementById('btn-add').onclick = () => {
        const x = document.getElementById("x").value;
        const y = document.getElementById("y").value;
        const size = document.getElementById("size").value;

        spriteList.push(new Square(x,y,size))
    }
    canvas.onmousemove = e => {
        mouseX = e.pageX - canvas.offsetLeft
        mouseY = e.pageY - canvas.offsetTop
        console.log("🚀 ~ file: draw.js ~ line 18 ~ window.addEventListener ~ mouseX", mouseX)
    }
	tick()
})

const tick = () => {
    ctx.clearRect(0,0,650,500)
    spriteList.forEach(s => s.tick())
	window.requestAnimationFrame(tick);
}