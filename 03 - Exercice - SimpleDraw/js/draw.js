var ctx = null;

var mouseX = 0;
var mouseY = 0;
var spriteList = [];

window.onload = function () {
    ctx = document.getElementById("canvas").getContext("2d");
    tick();
    
    document.getElementById("canvas").onmousemove = function (e) {
        mouseX = e.pageX - document.getElementById("canvas").offsetLeft;
        mouseY = e.pageY - document.getElementById("canvas").offsetTop;
    }

    document.getElementById("btn-add").onclick = function (e) {
        spriteList.push(new Square(
            document.getElementById("x").value,
            document.getElementById("y").value,
            document.getElementById("size").value
        ));

        document.getElementById("x").value = "";
        document.getElementById("y").value = "";
        document.getElementById("size").value = "";
    }
}

function tick() {
    ctx.clearRect(0, 0, 600, 500);
    
    for (var i = 0; i < spriteList.length; i++) {
        spriteList[i].tick();
    }

    window.requestAnimationFrame(tick);
}
