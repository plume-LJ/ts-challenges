import {JSDOM} from 'jsdom'
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

function asyncCall(callback) {
  const div = dom.window._document.createElement('div')
  let count = 0
  const observer = new dom.window.MutationObserver(() => {
      callback && typeof callback === 'function' && callback.call(null)
  })

  observer.observe(div, { attributes: true })
  div.setAttribute('count', `${++count}`);
}

setTimeout(() => {
  console.log(1)
}, 0)

new Promise((resolve) => {
  console.log(2)
  // for(let i = 0; i < 100000; i++) {
  //     (i === 99999) && resolve(undefined)
  // }
  resolve(undefined)
  console.log(3)
}).then(() => {
  console.log(4)
}).then(() => {
  console.log(41)
})

console.log(5)

asyncCall(() => {
  console.log(6)
})
console.log(7)