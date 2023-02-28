async function async1() {
  console.log("async1 start");
  await async2()
  // console.log('async1 end1')
  // await async2()
  // await async3()
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  // return {
  //   then(cb) {
  //     cb();
  //     console.log("then call");
  //   },
  // };
  return new Promise((resolve, reject) => {
    resolve(2);
    console.log("async2 promise");
  });
}
console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
async2()
  // .then(() => {
  //   console.log('async2 end')
  // });
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
  })
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
