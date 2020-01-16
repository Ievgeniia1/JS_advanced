function counter (){
    let count = 0;
    return function () {
        return count++;
    };

}

let run =  counter();
console.log(run());
console.log(run());
console.log(run());