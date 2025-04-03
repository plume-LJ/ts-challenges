function isValid(s) {
    var helperStack = [];
    for (var i = 0, length = s.length; i < length; i++) {
        var x = s[i];
        switch (x) {
            case '(':
                helperStack.push(')');
                break;
            case '[':
                helperStack.push(']');
                break;
            case '{':
                helperStack.push('}');
                break;
            default:
                if (helperStack.pop() !== x)
                    return false;
                break;
        }
    }
    return helperStack.length === 0;
}
;
function isValid1(s) {
    var helperStack = [];
    var bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var i = s_1[_i];
        if (bracketMap.hasOwnProperty(i)) {
            helperStack.push(bracketMap[i]);
        }
        else if (i !== helperStack.pop()) {
            return false;
        }
    }
    return helperStack.length === 0;
}
;
console.log(isValid1('([)]'));
