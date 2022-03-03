/**
 * 参考文章：https://www.cnblogs.com/pqjwyn/p/11207419.html
 * 1、状态更新函数之后的再次改变状态的操作都是无效的，例如异常之类的也不会被catch。
逻辑代码推荐在状态更新之前执行。
 */
// const test = new Promise((resolve, reject) => {
//   resolve(1);
//   console.log("执行代码改变状态");
//   throw new Error("报错啦");
// });

// test.then(
//   (res) => {
//     console.log("resolve", res);
//   },
//   (err) => {
//     console.log("reject", err);
//   }
// );
// console.log(test);

/**
 * 2、实现一个promise，他的构造函数是什么样的
 */

const STATUS = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTEDl: "rejected",
};

class Promise {
  constructor(fn) {
    // 初始化状态
    this.status = STATUS.PENDING;
    // resolves事件队列
    this.resolves = [];
    // rejects事件队列
    this.rejects = [];

    const resolve = (val) => {
      this.triggerResolve(val);
    };
    const reject = (val) => {
      this.triggerReject(val);
    };

    // 执行fn
    try {
      fn(resolve, reject);
    } catch (err) {
      this.triggerReject(err);
    }
  }

  // 触发resolve回调
  triggerResolve(val) {
    this.value = val;
    if (this.status === STATUS.PENDING) {
      this.status = STATUS.RESOLVED;
      this.resolves.forEach((it) => {
        it(val);
      });
    }
  }

  // 触发reject回调
  triggerReject(val) {
    this.value = val;
    if (this.status === STATUS.PENDING) {
      this.status = STATUS.PENDING;
      this.rejects.forEach((it) => {
        it(val);
      });
    }
  }

  // then实现
  then(onResolved, onRejected) {
    const resolvehandle = (val) => {
        return onResolved(val);
      },
      rejecthandle = (val) => {
        return onRejected;
      };

    this.resolves.push(resolvehandle);
    this.rejects.push(rejecthandle);
  }
}

new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "my");
}).then((res) => {
  console.log("hhhh", res);
});
// console.log(
//   new promise((resolve, reject) => {
//     return resolve(1);
//   })
// );
