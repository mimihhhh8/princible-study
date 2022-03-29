// https://es6.ruanyifeng.com/#docs/object-methods
// const arr = [1, 2, 3, 4];
// const [first, second] = arr;
// console.log(first, second);

// const obj1 = { a: { b: 1 } };
// const obj2 = Object.assign({}, obj1);

// // obj1.a.b = 2;
// obj2.a.b; // 2
// console.log(obj2);

// const target = { a: { b: "c", d: "e" } };
// const source = { a: { b: "hello" } };
// let fin = Object.assign(target, source);
// // ，target对象的a属性被source对象的a属性整个替换掉了，而不会得到{ a: { b: 'hello', d: 'e' } }的结果。
// console.log(fin);

// let obj = Object.assign([1, 2, 3], [4, 5]);
// console.log("obj", obj);

// const source = {
//   get foo() {
//     return 1;
//   },
// };
// const target = {};

// let aa = Object.assign(target, source);
// console.log("aa", aa);

// class Point {
//   constructor(x, y) {
//     let b = Object.assign(this, { x, y });
//     console.log("b", b);
//   }
// }

// let a = new Point(1, 2);
// console.log(a);
