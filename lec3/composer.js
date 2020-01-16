function add1(x) {
    return x + 1;
}

function add2(x) {
    return x + 2;
}

function min1(x) {
    return x - 1
}

function mul2(x) {
    return x * 2;
}

function compose(...args){
    return function (param) {
        // let result;
        for (let i = 0;i<args.length;i++){
            param = args[i](param);
            // num = result
        }
        return param
    }
}


let doublePlus1 = compose(mul2, add1);
let doubleMinDoubleAdd2 = compose(mul2,min1,mul2,add2);

console.log(doublePlus1(2)); // 2*2 +1 = 5
console.log(doubleMinDoubleAdd2(3)); // (3 * 2 - 1) * 2 + 2 = 12