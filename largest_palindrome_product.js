/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
module.exports = function(multiplicands, digits){
  var palindromeNumber = 0;
  var numString = [];
  for(var i=0; i<digits; i++){
    numString.push(9);
  }

  var factorTest_0 = Number(numString.join(""));
  var factorTest_1 = Number(numString.join(""));
  var set = factorTest_0;
  var factor_0 = 0;
  var factor_1 = 0;

  for(var j = set; j>1; j--){
    factorTest_1 = j;
    for(var i = set; i>1; i--){
      factorTest_0 = i;
      var numTest = factorTest_1 * factorTest_0;
      var numTestReverse = Number(numTest.toString().split("").reverse().join(""));
      if(numTest === numTestReverse && numTest > palindromeNumber){
          palindromeNumber = numTest;
          factor_0 = i;
          factor_1 = j;
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};