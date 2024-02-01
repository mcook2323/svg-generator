//This generates the circle option utilizing the shapes.js for the universal requirements

const Shape = require('./shapes.js');

class Circle extends Shape{
  constructor(color, text, textColor){
    super(color, text, textColor)
  }
  render(){
    return `<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill="${this.color}" />
    <text x="50%" y="60%" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>
  </svg>`;
  }
}

module.exports = Circle;