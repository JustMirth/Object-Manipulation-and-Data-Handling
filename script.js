//Part 1
const student = {
    name: "Mitchell Callaghan",
    age: 24,
    enrolled: true, 
    courses: ["Operating Systems", "Fundamentals of JavaScript", "Web Programming and Design", "Database Concepts and Design", "Algorithms and Problem Solving", "Technical Reading and Writing Skills"],
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    },
    addCourse: function(newCourse) {
        this.courses.push(newCourse);
    },
    totalCourses: function() {
        return this.courses.length;
    }
};

console.log(`Name: ${student.name} and Age: ${student.age}`);
console.log(student.displayInfo());

//Part 2
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);
console.log(student === studentObject);

//Part 3
const { name, courses } = student;
console.log(`Name: ${name}`);
console.log((`Courses: ${courses}`));

const scores = [95, 100, 100, 90, 95, 85];
const [firstScore, secondScore] = scores;
console.log(`First Score: ${firstScore}`);
console.log(`Second Score: ${secondScore}`);

//Part 4
const studentClone = {...student, graduationYear: 2026};
console.log(studentClone);

const newCourses = ["Advanced Front-End Programming", "Object-Oriented Programming"];
const allCourses = [...student.courses, ...newCourses];
console.log(`All Courses: ${allCourses}`);

/*Part 5: Done in Student Object */
console.log(`Courses: ${student.courses}`);
console.log(`Courses Length: ${student.courses.length}`);
student.addCourse("Object-Oriented Programming");
console.log(`Courses: ${student.courses}`);
console.log(`Courses Length: ${student.courses.length}`);

//Bonus
const totalScore = scores.reduce((subtotal, score) => subtotal + score, 0);
const avgScore = totalScore / scores.length;
console.log(`Average Score: = ${avgScore}`);