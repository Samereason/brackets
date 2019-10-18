module.exports = function check(str, bracketsConfig) {
	const strArr = str.split("");
	const result = [];

	for (let i = 0; i < strArr.length; i++) {
		for (let b = 0; b < bracketsConfig.length; b++) {
			if (strArr[i] === bracketsConfig[b][0]) {
				result.push(bracketsConfig[b][0]);

				if (strArr[i] === bracketsConfig[b][1] && strArr[i] === result[result.length-2]) {
					result.pop();
					result.pop();
				}
			}
			else if (str[i] === bracketsConfig[b][1]) {
				if (result[result.length-1] !== bracketsConfig[b][0]) return false;

				result.pop();
			}
		}
	}

	return result.length === 0;
};
