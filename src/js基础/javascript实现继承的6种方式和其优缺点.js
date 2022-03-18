// https://www.cnblogs.com/linzaizai/p/7529890.html

// 需要继承的父类
function Animal(name) {
  this.name = name || "Animal";
  this.sleep = function () {
    console.log(this.name + "正在睡觉");
  };
}

Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃" + food);
};

/**
 * 1、原型链继承
 * 核心：将父类的实例作为子类的原型
 * 特点:简单易于实现
 * 缺点：只能实现单继承；引用属性也是共享的；创建子类实例时，无法向父类构造函数传参；
 *
 */
//定义一个猫类
// function Cat() {}
// Cat.prototype = new Animal("猫");
// let cat = new Cat();
// cat.eat("香蕉");

/**
 * 2、构造继承（没用到原型）
 * 核心：使用父类的构造函数来增强子类实例，等于是复制父类实例的属性给子类
 * 特点：子类的每个实例都有自己的属性，不会相互影响
 * 缺点：没有实现父类方法的复用
 */
// function Cat(name) {
//   Animal.call(this);
//   this.name = name || "Tom";
// }
// let cat = new Cat("xiaobai");
// cat.sleep("方便面");
// console.log(cat.name);

/**
 * 3、组合继承
 * 核心：融合原型链继承和构造函数继承的优点，是javascript最常用的继承模式
 * 特点:  继承父类实例的属性和方法,也继承原型的属性和方法
        既是子类实例, 也是父类实例
        不存在引用共享问题
        可传参
        函数可复用
 * 缺点：调用了两次父类构造函数，生成两份实例
 */
// function Cat(name) {
//   Animal.call(this);
// }

// Cat.prototype = new Animal();
// new Cat();

/**
 * 4、寄生组合继承
 * 核心：避免组合继承的缺点，不会初始化两次父类
 * 特点：实现多继承，完美的继承了父类的属性方法，及父类原型
 * 缺点：实现比较复杂
 */

function Cat() {
  Animal.call(this);
}

(function () {
  var Super = function () {};
  Super.prototype = Animal.prototype;
  Cat.prototype = new Super();
})();

new Cat();

/**
 * es6中的class
 */
// class Super(){
//   constructor(props = {name:"eric"}){
//      this.name = props
//   }
// }
