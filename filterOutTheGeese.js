/**
 * This function removes any geese from an array of birds
 * @param {array} birds 
 * @returns birds array with geese removed
 */
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(word => !geese.includes(word))
  };