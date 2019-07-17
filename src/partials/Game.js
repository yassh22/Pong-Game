import {SVG_NS, KEYS} from '../settings.js'
import Board from './Board.js';
import Paddle from './paddle.js'

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element)
    this.board = new Board(this.width, this.height)
    
    // paddle dimensions
    this.paddleWidth = 8
    this.paddleHeight = 56
    this.boardGap = 10

    // Player 1
    this.player1 = new Paddle(
      'orange',
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.a,
      KEYS.z
      )

    // player 2
    this.player2 = new Paddle(
      'red',
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down

    )

  } 

  render() {
    // Clear Board
    this.gameElement.innerHTML = ''

    // create SVG element for the Board
    let svg = document.createElementNS(SVG_NS, 'svg')

    svg.setAttributeNS(null, 'width', this.width)
    svg.setAttributeNS(null, 'height', this.height)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.height} ${this.width}`)
    this.gameElement.appendChild(svg)

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)

  }
}
