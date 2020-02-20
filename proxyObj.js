let handler = {
    get: function (target, name) {
        if (name in target){
            return target[name];
        }
        else {
            throw new Error(`Unknown property `+name+` was called`)
        }
    },
    set: function (target, name, value) {
        if (dataCheck(value)) {
            target[name] = value;
        } else {
            throw new Error(`Value "`+value+`" is not acceptable to set as object property value`)
        }
    }
};
let p = new Proxy({}, handler);
p.a = 1;
p.b = "ogo";
// p.c = "qqqw";

console.log(p.a);
console.log(p.b);





function dataCheck(value) {

    function isPalindrome(str) {
        return str.toLowerCase() === (str.toLowerCase()).split('').reverse().join('');
    }

    let isAllowed;

    if ((typeof value == "number")&&(value > 0)) {
        isAllowed = (value === parseInt(value, 10))
    }
    if (typeof value == "boolean") {
        isAllowed = value;
    }
    if ((typeof value == "string")&&(value)) {
        isAllowed = isPalindrome(value)
    }
    return isAllowed;
}
