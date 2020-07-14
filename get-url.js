// Your code here.
// Note that you do NOT need the data for this function!

const getUrl = function (address) {
  // for ( const item of address) {
  if (address) {
    return address[1]
  }
  return null;
}
console.log()

// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
