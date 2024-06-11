// Create a simple object with three items:
var myObject = {
    item1: "value1",
    item2: "value2",
    item3: "value3"
};
// Use a for...in loop to get properties' names and values from the object:
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log("Property:", key);
        console.log("Value:", myObject[key]);
    }
}
