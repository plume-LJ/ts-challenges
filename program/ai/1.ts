//@ts-ignore
function encryptString(inputString: string, k: number): string {
  const regex = /"([^"]*?)"/g;
  let result = '';
  let match;

  while ((match = regex.exec(inputString)) !== null) {
    const encryptedContent = match[1].replace(/./g, '*');
    result += inputString.substring(0, match.index) + `"${encryptedContent}"`;
    inputString = inputString.substring(match.index + match[0].length);
  }

  result += inputString;

  return result;
}

// 要加密的字符串
const inputString: string = 'command_"con_tent1"_command_"content2"';

// 进行加密
const encryptedString: string = encryptString(inputString, 2);
console.log(encryptedString);
