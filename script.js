// complete the given function

function palindrome(str){
  str.replace(/\s/g, "");
  let i=0;
	let j=str.length-1;
	while (i<j) {
		if (str[i]===str[j]) {
			return true;
		}
		i++;
		j--;
		}
	return false;
}

module.exports = palindrome
