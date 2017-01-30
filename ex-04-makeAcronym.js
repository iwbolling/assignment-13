// ex-04 makeAcronym()

// Write a function called makeAcronym() that converts a name like Portable Document Format
// to its acronym (PNG).

function makeAcronym(name){
  var splitArr = [];
  var acroStr = "";
  var nameArr = name.split(" ");
  for (i=0;i<nameArr.length;i++) {
    splitArr = nameArr[i].slice(0);
    acroStr = acroStr + splitArr[0].toUpperCase();
  }
  return acroStr;
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )

//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )