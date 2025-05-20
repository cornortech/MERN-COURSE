



// methods / functions

// 1. forEach - loops through each element in the array
// 2. find
// 3. filter
// 4. map
// 5. some



// function printStudentName(studentName){
//     console.log(  ` Student Name : ${studentName} ` );
// }

// students.forEach(  printStudentName   )
 

// find method is used to find a single element in the array
// const students = ["Ashwin","Sagar"];



// const result = students.find(function(studentName){
    
//     const isAshwin = studentName === "Ashwin";

//     return isAshwin ; // false | true;
// })

// // arrow function 


//  const resultWithArrowfunc=  students.find((studentName) =>  studentName === "rajesh")


const students =[
    {
        name:"Ashwin",
        email:"ashwin@gmail.com",
        password:"Ashwin@Ashwin#987",
        age:29,
        isOnline:true,
    },
    {
        name:"Rajesh",
        email:"rajesh@gmail.com",
        password:"Rajesh@Rajesh#987",
        age:24,
        isOnline:true,
    },
    {
        name:"Sagar",
        email:"sagar@gmail.com",
        password:"Sagar@Sagar#987",
        age:17,
        isOnline:false,
    },
];


// ************ filter method ************

const filteredStudents = students.filter(function(studentObj){

    return studentObj.isOnline == true; 
    
})

console.log(filteredStudents);


















// *******************************************************


// const studentWithAgeSeventeen =  students.find(function(studentObj){
//     return studentObj.age == 17 || studentObj.name === "Rajesh" ;
// })

// console.log(studentWithAgeSeventeen);



// ****************************************


// // use forEach method to lop through the array of student Object and print the name of each student


// students.forEach(function(studentObj){
   

//         console.log(` My name is ${studentObj.name} and I am ${studentObj.age} years old. ${studentObj.email} is my email. `)

// })


// // My name is ... and i am ... years old . ... is my email .

