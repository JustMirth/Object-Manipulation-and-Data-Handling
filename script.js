const student = {
    name: "Mitchell Callaghan",
    age: 24,
    enrolled: true, 
    courses: ["Operating Systems", "Fundamentals of JavaScript", "Webprogramming and Design", "Database Concepts and Design", "Algorithms and Problem Solving", "Technical Reading and Writing Skills"],
    finalGrades: ["", "", "", "", "", ""],
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    }
};

console.log(`Final Grade: ${student.finalGrades}`);
