/* jshint strict:false */
function runArrayFunctionsTest(array) {
  console.log('Starting array: ', array);

  array.push(11);
  console.log('\n\narray.push(11)\nExpected array: [1,2,3,4,5,6,7,8,9,10,11] \nActual array: %s \nRun time: O(1)',
    JSON.stringify(array)
  );

  array.pop();
  console.log('\n\narray.pop()\nExpected array: [1,2,3,4,5,6,7,8,9,10] \nActual array: %s\nRun time: O(1)',
    JSON.stringify(array)
  );

  array.shift();
  console.log('\n\narray.shift()\nExpected array: [2,3,4,5,6,7,8,9,10] \nActual array: %s\nRun time: O(N)',
    JSON.stringify(array)
  );

  var slicedArray = array.slice(1,4);
  console.log('\n\narray.slice(1,4)\nExpected array: [2,3,4,5,6,7,8,9,10] \nActual array: %s\nSliced array: %s\nRun time: O(N) where N = length of sliced array',
    JSON.stringify(array),
    JSON.stringify(slicedArray)
  );

  var splicedArray = array.splice(1,4);
  console.log('\n\narray.splice(1,4)\nExpected array: [2,7,8,9,10] \nActual array: %s\nSpliced array: %s\nRun time: O(N)',
    JSON.stringify(array),
    JSON.stringify(splicedArray)
  );
}

var array = [1,2,3,4,5,6,7,8,9,10];
runArrayFunctionsTest(array);
