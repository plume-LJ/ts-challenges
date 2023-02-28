new Promise((resolve) => {
  resolve(Promise.resolve(2));
}).then(() => {
  console.log(111); // 2
});
new Promise((resolve) => {
  resolve(2);
}).then(() => {
  console.log(222); // 0
});
new Promise((resolve) => {
  resolve(new Promise((resolve) => resolve(2)));
}).then(() => {
  console.log(333); // 2
});
new Promise((resolve) => {
  resolve({
    then(cv) {
      cv(2);
    },
  });
}).then(() => {
  console.log(444); // 1
});

Promise.resolve(
  new Promise((resolve) => {
    resolve(2);
  })
).then(() => {
  console.log(555); // 0
});

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
