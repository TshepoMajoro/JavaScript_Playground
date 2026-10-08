/*
Exercise 1 — Student Management System

Create an array called students containing 5 student objects.

Each student must have:

name
age
mark
course




function displayStudents() {
    // Display every student's name and mark
}

function calculateAverage() {
    // Calculate and return the average mark
}

function findTopStudent() {
    // Find and return the student with the highest mark
}

function findPassedStudents() {
    // Return students who have a mark of 50 or higher
}
* */

const students = [
    {name:"Dominic", age: 27,mark: 70,course:"Law"},
    {name:"Franklyn", age: 25,mark: 75,course:"Forensic Sciences"},
    {name:"Gideon", age: 23,mark: 65,course:"Actuarial Sciences"},
    {name:"Billy", age: 28,mark: 81,course:"Geology"},
    {name:"Edward", age: 26,mark: 74,course:"Mechanical Engineering"}
]

function displayStudents(studentsArray){
    studentsArray.forEach(student => {
        const {name, mark} = student;
        console.log(`The student's name is ${name}, and their mark is ${mark}.\n`);
    })
}

displayStudents(students);

function calculateAverage(studentsArray){
    let sum = 0;
    const numStudents = studentsArray.length;
    studentsArray.forEach(student => {
        sum += student.mark;
    });
    const averageMark = sum / numStudents;
    console.log(`The average mark is ${averageMark}.\n`);
    return averageMark;
}

calculateAverage(students);

function findTopStudent(studentsArray){
    let highestMark = 0;
    let outcome = "";
    let topPerformer = {};
    studentsArray.forEach(student => {
        const {name,mark} = student;
        if (mark >= highestMark){
            highestMark = mark;
            topPerformer = student;
            outcome = `The top performing student is ${name} with a mark of ${mark}.\n`;
        }
    });
    console.log(outcome);
    return topPerformer;
}

findTopStudent(students);

function findPassedStudents(studentsArray){
    let passedStudents = [];
    studentsArray.forEach(student => {
        const {name, mark} = student;
        if (mark >= 50){
            passedStudents.push(`${name} passed with a mark of ${mark}`);
        }
    });
    console.log(passedStudents.join("\n"));
    return passedStudents;
}

findPassedStudents(students);