function logPerson(){
    console.log (`Person: ${this.name}, ${this.age}, ${this.job} `)
}
const person1 = {name: "Michael", age: 22, job: "SMM"};
const person2 = {name: "Helen", age: 26, job: "QA"};

function bind(context, func){
    return function(){
        func.apply(context)
    }
}

bind(person1,logPerson)();
bind(person2,logPerson)();