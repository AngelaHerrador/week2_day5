class Ball {

    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, canvasSize, ballGravity, ballVelX, ballVelY) {
        this.ctx = ctx
        this.ballPos = {
            x: ballPosX,
            y: ballPosY
        }
        this.ballSize = {
            w: ballWidth,
            h: ballHeight
        }
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.ballVel = {
            x: ballVelX,
            y: ballVelY
        }
        this.ballGravity = ballGravity
        this.ballImageName = 'basketball.png'

        this.ballImageInstance = undefined

        this.init()
    }

    init() {
        this.ballImageInstance = new Image()
        this.ballImageInstance.src = `img/${this.ballImageName}`
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.ballImageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {

        if (this.ballPos.y >= this.canvasSize.h - this.ballSize.h) {
            this.ballVel.y *= -1
        }

        if (this.ballPos.x >= this.canvasSize.w - this.ballSize.w) {
            this.ballVel.x *= -1
        }

        this.ballPos.x += this.ballVel.x

        this.ballVel.y += this.ballGravity
        this.ballPos.y += this.ballVel.y
    }
}