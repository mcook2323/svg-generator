

//This generates the triangle option utilizing the shapes.js for the universal requirements

const Shape = require('./shapes.js');

class Tiangle extends Shape{
  render(){
    return `<svg width="120" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,10 110,90 10,90" fill="${this.color}" stroke="black" stroke-width="2" />
    <text x="50%" y="60%" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>
  </svg>`
  }
}

module.exports = Triangle;