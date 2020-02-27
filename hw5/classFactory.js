class Point {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}
class Figure {
    constructor() {
        if (new.target === Figure) {
            throw new TypeError('Figure class is abstract!')
        }
    }
    welcome() {
        console.log('Im general figure')
    }
}
class Circle extends Figure {
    welcome() {
        console.log("I'm circle")
    }
}
//треугольники
class Triangle extends Figure {
    welcome() {
        console.log("I'm triangle")
    }
}
class IsoscelesTriangle extends Triangle {
    //равнобедренный
    welcome() {
        console.log("I'm isosceles triangle")
    }
}
class EquilateralTriangle extends IsoscelesTriangle {
    //равносторонний
    welcome() {
        console.log("I'm equilateral triangle")
    }
}
//четырехугольники
class Quadro extends Figure {
    welcome() {
        console.log("I'm quadro")
    }
}
class Square extends Quadro {
    welcome() {
        console.log("I'm square")
    }
}
class Factory {
    create(...args) {
        let figure;
        switch (args.length) {
            case 1:
                figure = new Circle();
                break;
            case 3:
                figure = new Triangle();
                let ab = lineLength(args[0], args[1]);
                let bc = lineLength(args[1], args[2]);
                let ac = lineLength(args[2], args[0]);
                if ((ab === bc) && (ab === ac)) {
                    figure = new EquilateralTriangle();
                } else if ((ab === bc) || (bc === ac) || (ab === ac)) {
                    figure = new IsoscelesTriangle();
                }
                break;
            case 4:
                figure = new Quadro();
                let xy = lineLength(args[0], args[1]);
                let yz = lineLength(args[1], args[2]);
                let zp = lineLength(args[2], args[3]);
                let px = lineLength(args[3], args[0]);

                if ((xy === yz) && (xy === zp) && (xy === px)) {
                    figure = new Square();
                }
                break;
            default:
                figure = new Figure();
                break;
        }
        return figure;
    }
}
function lineLength(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}
let a = new Point(2, 1, "A");
let b = new Point(5, 1, "B");
let c = new Point(5, 4, "C");
let d = new Point(2, 4, "D");

let factory = new Factory();
let figure1 = factory.create(a);
let figure2 = factory.create(a, b, c);
let figure3 = factory.create(a, b, c, d);

figure1.welcome();
figure2.welcome();
figure3.welcome();
