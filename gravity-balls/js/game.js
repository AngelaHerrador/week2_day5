const game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: null,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        space: ' '
    },
    balls: [],
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    start() {
        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.clearAll()
        }, 30)
    },

    drawAll() {
        this.balls.forEach(elm => elm.draw())
    },

    setEventListeners() {
        document.onkeypress = e => {
            if (e.key === this.keys.space) {
                this.generateNewBall()
            }
        }
    },

    clearAll() {
        this.balls = this.balls.filter(elm => elm.ballPos.x > 0)
    },

    generateNewBall() {
        const ball = new Ball(this.ctx, 0, 100, 50, 50, this.canvasSize, .4, 6, 3)
        this.balls.push(ball)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}