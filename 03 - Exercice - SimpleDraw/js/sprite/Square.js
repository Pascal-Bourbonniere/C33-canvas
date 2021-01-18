class Square {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    tick() {
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "cyan";
    
        if (Math.abs(mouseX - this.x) < this.size/2 && Math.abs(mouseY - this.y) < this.size/2) {
            ctx.fillStyle = "grey";
        }
    
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, 
                     this.size, this.size);
    
        ctx.strokeRect(this.x - this.size/2, this.y - this.size/2, 
                     this.size, this.size);
    }
}
