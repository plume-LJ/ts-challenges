function reverseLeftWords(s, n) {
    /** Utils */
    function reverseWords(strArr, start, end) {
        var _a;
        // let temp: string;
        while (start < end) {
            _a = [strArr[end], strArr[start]], strArr[start] = _a[0], strArr[end] = _a[1];
            // temp = strArr[start];
            // strArr[start] = strArr[end];
            // strArr[end] = temp;
            start++;
            end--;
        }
    }
    /** Main code */
    var strArr = s.split("");
    var length = strArr.length;
    // reverseWords(strArr, 0, length - 1);
    // reverseWords(strArr, 0, length - n - 1);
    // reverseWords(strArr, length - n, length - 1);
    reverseWords(strArr, 0, n - 1);
    reverseWords(strArr, n, length - 1);
    reverseWords(strArr, 0, length - 1);
    return strArr.join("");
}
// 拼接两个字符串，截取符合要求的部分
function reverseLeftWords1(s, n) {
    return (s + s).slice(n, s.length + n);
}
console.log(reverseLeftWords('23adce', 4));
