//  Create an empty array:
var myArray = [];
// Run a loop 10 times, adding a new incrementing value to the array:
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
;
// Log the array into the console:
console.log("Array:", myArray);
// Use the for loop to iterate through the array:
for (var i = 0; i < myArray.length; i++) {
    console.log("Index:", i, "Value:", myArray[i]);
}
// Use the for...of loop to output the value into the console from the array:
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value:", value);
}
