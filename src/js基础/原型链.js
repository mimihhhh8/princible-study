// https://blog.csdn.net/qq_27118895/article/details/93169364
// 动物
function Animal(name) {
  this.name = name;
}

//给动物添加方法
Animal.prototype.getInfo = function () {
  console.log("我的名字是" + this.name);
};

// 猫
function Cat(name, age) {
  this.age = age;
  Animal.call(this, name);
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.getAge = function () {
  console.log("我的年龄是" + this.age);
};
let cat = new Cat("小猫", 10);
cat.getAge();
cat.getInfo();
console.log(cat);
