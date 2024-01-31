//This generates the Square option utilizing the shapes.js for the universal requirements

const Shape = require('./shapes.js');

class Square extends Shape{
  render(){
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${this.color}" />
    <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>
  </svg>
  `
  }
}

module.exports = Square;