var a = function(){ this.b = 3 }
var c = new a()
a.prototype.b = 10
var b = 7
a()
// console.log(b)//3
// console.log(c.b)//3

Function.prototype.call2 = function (context, ...args) {
  if (!context) context = globalThis
  const key = Symbol('fn')
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
Function.prototype.apply2 = function (context, args) {
  if (!context) context = globalThis
  const key = Symbol('fn')
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
Function.prototype.bind2 = function (context) {
  if (typeof this !=='function') {
    throw Error('try to bind is not callable')
  }
  const args = [...arguments].slice(1)
  const fTBind = this;
  function fNop () {
    this.bind= 'bind'
  }
  function fBound () {
    return fTBind.apply(this instanceof fNop ? this: context, [...args, ...arguments])
  }
  if (this.prototype) {
    fNop.prototype = this.prototype
  }
  fBound.prototype = new fNop
  return fBound
}
function C(...args) {
  console.log(args)
  console.log(this.aaa)
  if (!this.aaa) {
    this.aaa = 'nu'
  }
  console.log(this.aaa)
}
let bb2 = C.bind2(undefined, 2,2,2,2)
let bbb2 = new bb2(222)
// console.log(bbb2)
// let bb = C.bind(undefined, 2,2,2,2)
// let bbb = new bb(222)
// console.log(bbb)

function debounce (fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    } 
    timer = setTimeout(() => fn.call(this, ...args), wait)
  }
}

function throttle (fn, wait) {
  let preTime = 0
  return function (...args) {
   const now = Date.now()
   if (now - preTime >= wait) {
    fn.call(this, ...args)
    preTime = now
   }
  }
}
let aaaa = debounce(console.log, 50)
let bbbb = throttle(console.log, 50)
aaaa(22)
for (let i = 0; i< 9999999; i++) {
  aaaa(i)
  bbbb(i)
}