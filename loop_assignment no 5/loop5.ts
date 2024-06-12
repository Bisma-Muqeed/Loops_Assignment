//  Create an empty array:
const myArray : number[] = [];

// Run a loop 10 times, adding a new incrementing value to the array:
for(let i = 1; i <= 10; i++){
    myArray.push(i);
};

// Log the array into the console:
console.log("Array:", myArray);

// Use the for loop to iterate through the array:
for (let i = 0; i < myArray.length; i++) {
    console.log("Index:", i, "Value:", myArray[i]);
}

// Use the for...of loop to output the value into the console from the array:
for (const value of myArray) {
    console.log("Value:", value);
}
