function BF(src, dest) {
  var len1 = src.length,
    len2 = dest.length;
  var i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (src[i] === dest[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j === len2) {
    return i - j;
  }
  return -1;
}

function hash(data) {
  var total = 0;
  for (var i = 0, len = data.length; i < len; i++) {
    total += 37 * total + data.charCodeAt(i);
  }
  total = total % 144451;
  return parseInt(total);
}

function isMatch(str, dest) {
  if (str.length !== dest.length) {
    return false;
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== dest[i]) {
      return false;
    }
  }
  return true;
}

function RK(src, dest) {
  if (!src || !dest) {
    retunr - 1;
  }
  var len1 = src.length,
    len2 = dest.length;
  var destHash = hash(dest),
    index = -1;
  for (var i = 0; i <= len1 - len2; i++) {
    var subStr = src.substr(i, len2);
    if (hash(subStr) === destHash && isMatch(subStr, dest)) {
      index = i;
      break;
    }
  }
  return index;
}
function getNext(str) {
  var res = [];
  var k = 0;
  res[0] = k
  for (let i = 1, len = str.length; i < len; i++) {
    while (k > 0 && str[i] !== str[k]) {
      k = res[k - 1];
    }
    if (str[i] === str[k]) {
      k++;
    }
    res[i] = k;
  }
  return res;
}
// console.log(getNext('ababcsabab'))
function KMP(src, dest) {
  var next = getNext(dest);
  console.log(next)
  var len1 = src.length,
    len2 = dest.length;
  var i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (src[i] === dest[j] || j ===0) {
      i++;
      j++;
    } else {
      j = next[j - 1]
    }
  }
  if (j === len2) {
    return i - j;
  }
  return -1;
}
console.log(KMP('ababcsabab', 'abababc'))
function getMoveLengthObj (str) {
  var resObj = {},
      len = str.length;
  for (var i = 0; i < len; i++) {
      resObj[str[i]] = len - i;
  }
  return resObj;
}

console.log(getMoveLengthObj('ababd'))

function Sunday (src, dest) {
  var moveObj = getMoveLengthObj(dest);
  var len1 = src.length,
      len2 = dest.length;
  var i = 0,
      j = 0;
  while (i < len1 && j < len2) {
      if (src[i +j] === dest[j]) {
          // i++;
          j++;
      } else {
          // i = i;
          // console.log(i-j)
          var offset = moveObj[src[i + len2]];
          console.log(offset)
          if (offset) {
              i += offset;
          } else {
              i += len2;
          }
          j = 0;
      }
  }
  if (j === len2) {
      return i;
  }
  return -1;
}
// console.log(Sunday('ababcsababd', 'ababd'))
