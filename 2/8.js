var s = "𠮷";
console.log(s.length); // 2
console.log(s.charAt(0)); // ''
console.log(s.charAt(1)); // ''
console.log(s.charCodeAt(0)); // 55362
console.log(s.charCodeAt(1)); // 57271

async function add(...args) {
  return args.reduce((promiseChain, item) => {
    return promiseChain.then((res) => {
      return addRemote(res, item);
    });
  }, Promise.resolve(0));
}

console.log(this)
function T () {
  let a = () => {
    console.log(this)
  }
  a()
}
T()

// export{}