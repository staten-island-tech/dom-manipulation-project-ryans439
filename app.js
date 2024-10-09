const students = ["Peter", "Christina", "Kim"];
//console.log(students[0]);
students.forEach((student) => console.log(student));

const student = [{
    name:"lebron",
    age: 15,
    gradated: false,
},
{   name: "lerbon",
    age: 12,
    graduated: true,}]


    students.forEach((student) => console.log(student.name))

    const newArr = students.filter((student) => student.graduated !== false);
    console.log(newArr);
student
  .filter((student) => student.graduated === false)
  .forEach((student) => console.log(student.name));