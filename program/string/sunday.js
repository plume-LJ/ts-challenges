function sunday(main,pattern,ignoreCase)
  {
    var charSet = {},				//存放模式串 pattern 的每个字符最后一次出现的位置
        patternLen = pattern.length,//模式串 pattern 的长度
        mainLen = main.length;		//主串 main 的场地
    //是否忽略大小写
    if(ignoreCase) {
      main = main.toLowerCase();
      pattern = pattern.toLowerCase();
    }
    //存下 pattern 中每个字符的位置,出现重复字符时：后面出现的字符的位置将会覆盖前面出现的字符的位置
    for (var i = 0; i < patternLen; i++) {
    	charSet[pattern.charAt(i)] = i;
    }
    //主串与模式串逐个比较
    for (var i = 0; i <= mainLen-patternLen; ) {
    	var j = 0;
      //比较主串与模式串对应的字符,相同则往后移动一位,注意 i 始终没有变,只是加上了 j 表示移动位置
      while(j<patternLen && main.charAt(i+j) == pattern.charAt(j)) {
        j++;
      }
      if(j == patternLen) {
        return i;//在主串 main 中找到了子串 pattern,返回 pattern 在主串中的位置
      } else {
        var next = i + patternLen,  //主串中与模式串对应的最后一个字符的下一个字符
            charPos = charSet[main.charAt(next)];//next所对应的字符在 charSet 的位置,没有返回undefined
        if(charPos > -1) {    //模式串中存在next对应的字符
          i = next - charPos; //让主串与模式串中相同的字符对齐
        } else {
          i = next + 1;//模式串中没有 next 对应的字符,主串直接跳过该字符,i 跳到 next 的下一位
        }
      }
    }
    return -1;//主串main中没有匹配的子串pattern，返回 -1
  }

  console.log(sunday("asdfasdfsafabababafababababababsdf", "ababa",false));
