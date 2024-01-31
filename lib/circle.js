//This generates the circle option utilizing the shapes.js for the universal requirements

const Shape = require('./shapes.js');

class Circle extends Shape{
  render(){
    return `<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="40" fill="${this.color}" />
  <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`
  }
}

module.exports = Circle;