//@ts-ignore
function encryptString(inputString, k) {
    var regex = /"([^"]*?)"/g;
    var result = '';
    var match;
    while ((match = regex.exec(inputString)) !== null) {
        var encryptedContent = match[1].replace(/./g, '*');
        result += inputString.substring(0, match.index) + ("\"" + encryptedContent + "\"");
        inputString = inputString.substring(match.index + match[0].length);
    }
    result += inputString;
    return result;
}
// 要加密的字符串
var inputString = 'command_"con_tent1"_command_"content2"';
// 进行加密
var encryptedString = encryptString(inputString, 2);
console.log(encryptedString);
