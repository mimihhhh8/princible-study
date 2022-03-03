// 参考文章：https://www.cnblogs.com/canfoo/p/6891868.html
/**
 * 1、实现一个Observer
 */

function defineReactive(data, key, val) {
  observe(val); //递归遍历所以子属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val;
    },
    set: function (newVal) {
      val = newVal;
      console.log(
        "属性" + key + "已经被监听到了，现在值为：" + `${newVal.toString()}`
      );
    },
  });
}

function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key]);
  });
}

var library = {
  booke1: {
    name: "",
  },
  booke2: "",
};

observe(library);

library.booke1.name = "你好哈";
library.booke2 = "是的，我很好";
