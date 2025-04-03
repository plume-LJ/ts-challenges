function evalRPN(arr) {
    var stack = [];
    var op = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b; },
        "*": function (a, b) { return a * b; },
        "/": function (a, b) { return a / b; }
    };
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (op.hasOwnProperty(arr[i])) {
            var b = stack.pop();
            var a = stack.pop();
            result = op[arr[i]](Number(a), Number(b));
            stack.push("" + result);
        }
        else {
            stack.push(arr[i]);
        }
    }
    return result;
}
console.log(evalRPN(["2", "1", "+", "3", "*"]));
