"use strict";

let async1 = (() => {
  var _ref = _asyncToGenerator(function* () {
    console.log("async1 start");
    yield async2();
    // console.log('async1 end1')
    // await async2()
    // await async3()
    console.log("async1 end");
  });

  return function async1() {
    return _ref.apply(this, arguments);
  };
})();

let async2 = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    console.log("async2 start");
    // return 1
    // return {
    //   then(cb) {
    //     cb();
    //     console.log("then call");
    //   },
    // };
    return new Promise(function (resolve, reject) {
      resolve(2);
      console.log("async2 promise");
    });
  });

  return function async2() {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function (value) {
              step("next", value);
            },
            function (err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
async2()
  .then(() => {
    console.log("async2 end");
  });
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  })
  .then(function () {
    console.log("promise4");
  })
  .then(function () {
    console.log("promise5");
  });
// .then(function () {
//   console.log("promise6");
// })
// .then(function () {
//   console.log("promise7");
// })
// .then(function () {
//   console.log("promise8");
// })
// .then(function () {
//   console.log("promise9");
// });
console.log("script end");
