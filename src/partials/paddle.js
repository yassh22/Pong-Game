import {SVG_NS} from '../settings'

export default class Paddle {
    constructor(color, boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.speed = 10
        this.score = 0
        this.color = color

        document.addEventListener('keydown', event =>{
            switch(event.key) {
                case up: 
                    this.y = Math.max(0, this.y - this.speed)
                break;
                case down:
                    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed)
                break
            }

        })
    }

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect')

        rect.setAttributeNS(null, 'fill', this.color)
        rect.setAttributeNS(null, 'width', this.width)
        rect.setAttributeNS(null, 'height', this.height)
        rect.setAttributeNS(null, 'x', this.x)
        rect.setAttributeNS(null, 'y', this.y)
        rect.setAttributeNS(null, 'rx', '5')

        svg.appendChild(rect)
    }




}