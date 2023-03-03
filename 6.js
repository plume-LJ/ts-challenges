new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log("promise 1");
});

new Promise((resolve) => {
  resolve(Promise.resolve());
}).then(() => {
  console.log("promise 2");
});

new Promise((resolve) => {
  resolve({
    then(cb) {
      cb();
    },
  });
}).then(() => console.log("promise 3"));

Promise.resolve(Promise.resolve())
  .then(() => console.log("promise4"));

Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))