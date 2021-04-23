Array.prototype.myReduce = function (callbackFn, initialValue) {
  // 处理数组类型异常
  if (this === null || this === undefined) {
    throw new TypeError(`Cannot read property 'reduce' of null or undefined`);
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callbackFn) !== '[object function]') {
    throw new TypeError(callbackfn + ' is not a function')
  }

  let obj = Object(this)
  let len = obj.length >>> 0

  let key = 0
  let accumulator = initialValue
  if (accumulator === undefined) {
    for (; (key < len) && (accumulator === undefined); key++) {
      if (key in obj) {
        accumulator = obj[key]
        key++
      }
    }
    if(accumulator === undefined){
      throw new Error('Each element of the array is empty');
    }
  }
  for (; key < len; k++) {
    if (key in obj) {
      accumulator = callbackFn.call(undefined, accumulator, obj[key], key, obj)
    }
  }
  return accumulator
}
