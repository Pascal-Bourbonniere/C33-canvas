class Square {
	constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size =  size
        this.opacity = 0.5
        this.isHovered = false
        this.drawRect()
	}
    
    drawRect() {
        // ctx.fillStyle = this.isHovered ?
        //                 `rgba(0, 0, 0, ${this.opacity})` :
        //                 `rgba(255, 0, 255, ${this.opacity})`
        if(this.isHovered) {
            ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`
        } else {
            ctx.fillStyle = `rgba(255, 0, 255, ${this.opacity})`
        }
        ctx.fillRect(this.x, this.y, this.size, this.size)

        ctx.strokeStyle = `rgba(0, 255, 0, ${this.opacity})`
        ctx.strokeRect(this.x, this.y, this.size, this.size)
    }

	tick() {
        //mouseX mouseY
        // this.x et this.y et this.size
        if (mouseX >= this.x && mouseX <= this.size + this.x 
            && mouseY >= this.y && mouseY <= this.size + this.y) {
            this.isHovered = true
        } else {
            this.isHovered = false
        }
        this.drawRect()
	}
}





// let x = true
// let val 
// if(x) {
//     val = 'allo' }
// else {
//     val = 'bye'
// }
//      //predicat  ?  si vrai : si faux
// val = x          ? 'allo' : 'bye'
