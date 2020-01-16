const a = [1,3,4];
// const b = a;
const b = a.slice(0);

b[0]=2;

console.log(a);
console.log(b);