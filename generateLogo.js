const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');

function generateLogo(data){
  let shape = undefined
  if(data.shape === 'triangle'){
    shape = new Triangle(data.shape_color)
  }
}