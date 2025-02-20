/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  var newstring = []
  for (let i = 0; i < listOfStrings.length; i++){
    newstring.push(listOfStrings[i].toUpperCase());
  }
  return newstring
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  var sum = 0
  for (let i = 0; i < listOfStudentObjects.length; i++){
    if (listOfStudentObjects[i].age != undefined){
      sum += listOfStudentObjects[i].age;
    }
  }
  return sum
}
module.exports = { transformArrayToUpper, sumOfAllAges };

