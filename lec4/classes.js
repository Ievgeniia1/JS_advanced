class Human{
    constructor() {
        this.name = "HUMAN!"
    }

    lol(){
        console.log("1")
    }

}

class Person extends Human{
    constructor(){
        super();
        this.name = "PERSON POWER"
    }
    lol(){
        console.log("2")
    }

}

class SuperMan extends Person{
    constructor(){
        super();
        this.age = 25
    }
    lol(){
        console.log("3")

    }
}

let superman = new SuperMan();
console.log(superman.name);
console.log(superman instanceof Human)
superman.lol()
