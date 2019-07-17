import {SVG_NS} from '../settings.js'

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    // Other code goes here...
    
    this.gameElement = document.getElementById(this.element)
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



    

  }
}
