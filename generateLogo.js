// generateLogo.js
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Circle = require('./lib/circle');

function generateLogo(data) {
  let shape;

  if (data.shape === 'Triangle') {
    shape = new Triangle(data.color, data.text, data.textColor);
  } else if (data.shape === 'Square') {
    shape = new Square(data.color, data.text, data.textColor);
  } else if (data.shape === 'Circle') {
    shape = new Circle(data.color, data.text, data.textColor);
  } else {
    console.log('Invalid shape specified:', data.shape);
    throw new Error('Invalid shape specified');
  }

  return shape.render();
}

module.exports = generateLogo;
