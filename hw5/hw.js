class Point {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}

let a = new Point(2, 3, "A");
let b = new Point(5, 5, "B");
let c = new Point(7, 8, "C");
let arr = [a, b, c]


class Figure {
    constructor() {
        if (new.target === Figure) {
            throw new TypeError('Figure class is abstract!')
        }
    }

    calculateSquare() {
    }

    calculatePerimeter() {
    }

    welcome() {
        console.log(this.constructor.name)
    }

}

class Circle extends Figure {

}


//треугольники
class Triangle extends Figure {

}

class RightTriangle extends Triangle {

}

class IsoscelesTriangle extends Triangle {
    //равнобедренный
}

class EquilateralTriangle extends IsoscelesTriangle {
    //равносторонний
}


//четырехугольники
class Quadro extends Figure {

}

class Trapezoid extends Quadro {

}

class Rhombus extends Quadro {

}

class Rectangle extends Quadro {

}

class Square extends Rectangle {

}


let figr = new RightTriangle()
figr.welcome()
