class Human{
    constructor() {
        this.name = "HUMAN!"
    }

}

class Person extends Human{
    constructor(){
        super();
        this.name = "PERSON POWER"
    }

}

class SuperMan extends Person{
    constructor(){
        super();
        this.age = 25
    }
}

let superman = new SuperMan();
console.log(superman.name);
console.log(superman instanceof Human)
