////------------------------------------------------------------------
//  Ex-11 : `merge()`– ADVENTURE MODE
//
//  Write a function called `merge()` that takes two objects and
//  returns a new object with their combined properties & values.
//
//  If the two objects have the same property, make sure that you
//  return the property-values from the objecti in the 2nd argument
//
////------------------------------------------------------------------

function merge(obj1,obj2){
  var mergedObj = {};
  for (prop1 in obj1) {
    var valu1 = obj1[prop1];
    mergedObj[prop1] = valu1;
  }
  for (prop2 in obj2) {
    var valu2 = obj2[prop2];
    mergedObj[prop2] = valu2;
  }
  return mergedObj;
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var mergedObj1 = merge(obj1, obj2)

console.assert(mergedObj1.name === "Shaman Tilroy")
console.assert(mergedObj1.id === 6288)
console.assert(mergedObj1.balance === 38832)
console.assert(mergedObj1.accountActive === true)


// -------------------------------
var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var mergedObj2 = merge(obj3, obj4)

console.assert( mergedObj2.artist === "The Riverboat" )
console.assert( mergedObj2.released === 1980 )
console.assert( mergedObj2.title === "How to Wear a Bowtie")
console.assert( mergedObj2.quantity === 10 )
