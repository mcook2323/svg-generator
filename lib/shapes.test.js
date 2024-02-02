// shapes.test.js
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Test Circle Shape
describe('Circle', () => {
  test("Should create an instance of Circle", () => {
    var color = ('blue');
    var textColor = ('white');
    var text = ('MTC');
    const shape = new Circle(color, text, textColor);
    // shape.setColor(color);
    expect(shape.render()).toEqual(`<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill="${color}" />
    <text x="50%" y="60%" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`)
  });
});

// Test Square Shape
describe('Square', () => {
  test("Should create an instance of Square", () => {
    var color = ('green');
    var textColor = ('white');
    var text = ('MTC');
    const shape = new Square(color, text, textColor);
    shape.setColor(color);
    expect(shape.render()).toEqual(`<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${color}" />
    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>
  `)
  });
});

// Test Triangle Shape
describe('Triangle', () => {
  test("Should create an instance of Triangle", () => {
    var color = ('red');
    var textColor = ('white');
    var text = ('MTC');
    const shape = new Triangle(color, text, textColor);
  
    shape.setColor(color);
    expect(shape.render()).toEqual(`<svg width="120" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,10 110,90 10,90" fill="${color}" stroke="black" stroke-width="2" />
    <text x="50%" y="60%" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`)
    });
  });
  