const student = {
    name: "Mitchell Callaghan",
    age: 24,
    enrolled: true, 
    courses: ["Operating Systems", "Fundamentals of JavaScript", "Web Programming and Design", "Database Concepts and Design", "Algorithms and Problem Solving", "Technical Reading and Writing Skills"],
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    }
};

console.log(`Name: ${student.name} and Age: ${student.age}`);
console.log(student.displayInfo());
