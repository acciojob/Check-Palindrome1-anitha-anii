// complete the given function

function palindrome(str){
  const alphanumericOnly = str.toLowerCase().replace(/[^a-z0-9]/g, '');

 
  const reversed = alphanumericOnly.split('').reverse().join('');

  return alphanumericOnly === reversed;
}

module.exports = palindrome
