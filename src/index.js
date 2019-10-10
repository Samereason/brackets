// module.exports = function check(str, bracketsConfig) {
//   // your solution
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     console.log(i);
//   }
// };

function check(str, bracketsConfig) {
  // your solution
  // function hasMatch(str, strIndex, arr) {
  //   return arr.some(function(arrItem) {
  //     return str[strIndex] === arrItem[0] && str[str.length - strIndex - 1] === arrItem[1]
  //   });
  // }

  // for (let i = 0; i < str.length; i++) {
  //   for (let j = 0; j < bracketsConfig.length; j++) {
  //     if (str[i] === bracketsConfig[j][0]) {
  //       if (str.indexOf(bracketsConfig[j][1]) !== -1) {
  //
  //         break;
  //       }  else continue;
  //     }
  //     return false;
  //   }
  // }

  function hasMatch(str, arr) {
    if (str.length > 1) {
      const strPart = str.slice(1);

      for (let i = 0; i < arr.length; i++) {
        if (str[0] === arr[i][0] && strPart.indexOf(arr[i][1]) !== -1) {
          return strPart.indexOf(arr[i][1]) + 1;
        }
      }
    }

    return false
  }

  function replaceStr(str, arr) {
    const match = hasMatch(str, arr);

    if (match !== false) {
      str = str.substring(1, match) + str.slice(match + 1);

      replaceStr(str, arr);
    }
  }

  replaceStr(str, bracketsConfig);
}

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]);