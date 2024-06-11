// loop assignment no : 01
// Create a blank array:
var myWork = [];
// Use a loop to create lessons:
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 0,
    };
    //Add the lesson to the array:
    myWork.push(lesson);
}
;
console.log(myWork);
