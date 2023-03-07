(function() {
  var STOP = {}
  var STOP_PROMISE = Promise.resolve(STOP)
  var DONE = {}
  var WARN = {}
  var ERROR = {}
  var EXCEPTION = {}
  var PROMISE_PATCH = {}

  Promise.prototype._then = Promise.prototype.then//保存原本的then方法

  Promise.prototype.then = function(onResolved, onRejected) {
    return this._then(result => {
      if (result === STOP) {// 停掉后面的Promise链回调
        return result
      } else {
        return onResolved(result)
      }
    }, onRejected)
  }

  Promise.stop = function() {
    return STOP_PROMISE
  }

  Promise.done = function(value) {
    return Promise.resolve({
      flag: DONE,
      value,
    })
  }

  Promise.warn = function(value) {
    return Promise.resolve({
      flag: WARN,
      value,
    })
  }

  Promise.error = function(value) {
    return Promise.resolve({
      flag: ERROR,
      value,
    })
  }

  Promise.exception = function(value) {
    return Promise.resolve({
      flag: EXCEPTION,
      value,
    })
  }

  Promise.prototype.done = function(cb) {
    return this.then(result => {
      if (result && result.flag === DONE) {
        return cb(result.value)
      } else {
        return result
      }
    })
  }

  Promise.prototype.warn = function(cb) {
    return this.then(result => {
      if (result && result.flag === WARN) {
        return cb(result.value)
      } else {
        return result
      }
    })
  }

  Promise.prototype.error = function(cb) {
    return this.then(result => {
      if (result && result.flag === ERROR) {
        return cb(result.value)
      } else {
        return result
      }
    })
  }

  Promise.prototype.exception = function(cb) {
    return this.then(result => {
      if (result && result.flag === EXCEPTION) {
        return cb(result.value)
      } else {
        return result
      }
    })
  }
})()

new Promise((resolve, reject) => {
  // resolve(Promise.stop())
  resolve(Promise.done(1))
  // resolve(Promise.warn(2))
  // resolve(Promise.error(3))
  // resolve(Promise.exception(4))
})
.done(value => {
  console.log(value)
  return Promise.done(5)
})
.warn(value => {
  console.log('warn', value)
  return Promise.done(6)
})
.exception(value => {
  console.log(value)
  return Promise.warn(7)
})
.error(value => {
  console.log(value)
  return Promise.error(8)
})
.exception(value => {
  console.log(value)
  return
})
.done(value => {
  console.log(value)
  return Promise.warn(9)
})
.warn(value => {
  console.log(value)
})
.error(value => {
  console.log(value)
})
