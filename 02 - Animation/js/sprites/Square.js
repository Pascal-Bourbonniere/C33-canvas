const SQUARE_SIZE = 40
class Square {
    constructor(x,y){
        this.x = x
        this.y = y
        this.speed = -.01
        this.isAlive = true
        this.sideSize = SQUARE_SIZE
        this.drawRect()
    }

    // voir notes 01
    drawRect = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)"
        ctx.fillRect(this.x, this.y, this.sideSize, this.sideSize)

        ctx.strokeStyle = "rgba(0, 255, 0, 1)"
        ctx.strokeRect(this.x, this.y, this.sideSize, this.sideSize)
    }

    tick() {
        this.speed-=.01
        this.y+=this.speed
        this.drawRect()
        if (this.y <= -SQUARE_SIZE) {
            this.isAlive = false
        }
    }
}