// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');
const { reduceRight } = require('./pokemon.js');


const getRow = function (namePokemon) {
  for (const item of pokemon) {
    if (item[0] === namePokemon) {
      return item
    }
  }
  return null;
}
console.log()



// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
