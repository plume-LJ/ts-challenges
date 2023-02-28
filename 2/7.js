console.log('outer');
setTimeout(() => {

  setImmediate(() => {
    console.log('setImmediate');
  });
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
})