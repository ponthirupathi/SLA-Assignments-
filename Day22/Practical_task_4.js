//Create a base class Shape and a subclass Circle that calculates area.

class Shape {
  constructor(name) {
    this.name = name;
  }
}


class Circle extends Shape {
  constructor(radius) {
    super("Circle"); 
    this.radius = radius;
  }

  
  area() {
    return Math.PI * this.radius * this.radius;
  }
}


const c1 = new Circle(5);
console.log(`${c1.name} area = ${c1.area().toFixed(2)}`);
