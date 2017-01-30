/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
**/

function getCapitalLetters(str){
  var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var foundLetters = [];
  for (i=0;i<str.length;i++) {
    for (j=0;j<str.length;j++) {
      if (str[i] === capitalLetters[j]) {
        foundLetters.push(str[i]);
      }
    }
  }
  return foundLetters;
}
// An easier way would be to compare a character to its toUpperCase counterpart, wouldn't it? :b


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_1.length === 8 )
console.assert( output_1[3] === 'S' )
console.assert( output_1[4] === 'M' )
//---------------------
console.assert( output_2.length === 7 )
console.assert( output_2[3] === 'R' )
console.assert( output_2[6] === 'X' )

//Explorer Mode: Make these tests pass
//---------------------
// var output_3 = getCapitalLetters('TLDR; My mother gave Nancy nothing for Xmas.')
// console.assert( output_2.length === 7 )
// console.assert( output_2[3] === 'R' )
// console.assert( output_2[6] === 'X' )
