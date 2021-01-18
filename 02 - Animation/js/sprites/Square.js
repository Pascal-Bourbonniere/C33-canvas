const SQUARE_SIZE = 40
const HOLD_RANDOM_DELAY = 60
const HOLD_MIN_DELAY = 20
const OPACITY_FADE = 0.005

class Square {
    constructor(x, y){
        this.x = x
        this.y = y
        this.speed = -.01
        this.isAlive = true
        this.sideSize = SQUARE_SIZE
        this.drawRect()

        this.opacity = 1
        this.delay = Math.random() * HOLD_RANDOM_DELAY + HOLD_MIN_DELAY
    }

    // voir notes 01
    drawRect = () => {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`
        ctx.fillRect(this.x, this.y, this.sideSize, this.sideSize)

        ctx.strokeStyle = `rgba(0, 255, 0, ${this.opacity})`
        ctx.strokeRect(this.x, this.y, this.sideSize, this.sideSize)
    }

    tick() {
        if (this.delay <= 0) {
            this.speed-=.01
            this.y+=this.speed
            this.opacity -= OPACITY_FADE
        } else {
            this.delay--
        }
        if (this.y <= -SQUARE_SIZE) {
            this.isAlive = false
        }
        this.drawRect()
    }
}