// loop assignment no : 01


// Create a blank array:
const myWork : any[] = [];

// Use a loop to create lessons:
for(let i = 1 ; i <= 10 ; i++){
    let lesson = {
    name : `Lesson ${i}`,
    status : i % 2 === 0,
};
//Add the lesson to the array:
myWork.push(lesson);
};
// Print the result:
console.log(myWork);