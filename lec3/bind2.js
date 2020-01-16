function logPerson(someParam) {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, ${someParam}`)
}

const person1 = {name: "Vasya", age:20, job:"QA"};
const person2 = {name: "Petya", age:30, job:"Dev"};


Function.prototype.bind2 = function(context, ...args) {
    let self = this;
    return function() {
        self.apply(context, args);
    };
};

const test1 = logPerson.bind2(person1, "test1");

const test2 = logPerson.bind2(person2, "test2");
test1();
test2();
