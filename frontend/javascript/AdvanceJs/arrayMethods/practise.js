
// array of objects
const students = [
  { id: 1, name: "Aarav Sharma", age: 17, email: "aarav.sharma@example.com", gender: "Male", grade: 12, address: "Kathmandu, Nepal" },
  { id: 2, name: "Sita Thapa", age: 16, email: "sita.thapa@example.com", gender: "Female", grade: 11, address: "Pokhara, Nepal" },
  { id: 3, name: "Ramesh Koirala", age: 18, email: "ramesh.koirala@example.com", gender: "Male", grade: 12, address: "Lalitpur, Nepal" },
  { id: 4, name: "Anjali Rai", age: 17, email: "anjali.rai@example.com", gender: "Female", grade: 11, address: "Biratnagar, Nepal" },
  { id: 5, name: "Binod Shrestha", age: 16, email: "binod.shrestha@example.com", gender: "Male", grade: 10, address: "Butwal, Nepal" },
  { id: 6, name: "Kritika Gurung", age: 15, email: "kritika.gurung@example.com", gender: "Female", grade: 9, address: "Chitwan, Nepal" },
  { id: 7, name: "Nirajan Bhandari", age: 18, email: "nirajan.bhandari@example.com", gender: "Male", grade: 12, address: "Bhaktapur, Nepal" },
  { id: 8, name: "Pratiksha Karki", age: 16, email: "pratiksha.karki@example.com", gender: "Female", grade: 10, address: "Hetauda, Nepal" },
  { id: 9, name: "Subash Tamang", age: 17, email: "subash.tamang@example.com", gender: "Male", grade: 11, address: "Dharan, Nepal" },
  { id: 10, name: "Sunita Basnet", age: 15, email: "sunita.basnet@example.com", gender: "Female", grade: 9, address: "Nepalgunj, Nepal" },
  { id: 11, name: "Rajan Maharjan", age: 16, email: "rajan.maharjan@example.com", gender: "Male", grade: 10, address: "Kirtipur, Nepal" },
  { id: 12, name: "Meena Lama", age: 17, email: "meena.lama@example.com", gender: "Female", grade: 11, address: "Dhangadhi, Nepal" },
  { id: 13, name: "Dipesh Adhikari", age: 18, email: "dipesh.adhikari@example.com", gender: "Male", grade: 12, address: "Janakpur, Nepal" },
  { id: 14, name: "Asmita Khadka", age: 15, email: "asmita.khadka@example.com", gender: "Female", grade: 9, address: "Tansen, Nepal" },
  { id: 15, name: "Kamal Neupane", age: 17, email: "kamal.neupane@example.com", gender: "Male", grade: 11, address: "Gorkha, Nepal" },
  { id: 16, name: "Puja Bhattarai", age: 16, email: "puja.bhattarai@example.com", gender: "Female", grade: 10, address: "Itahari, Nepal" },
  { id: 17, name: "Rupesh Baral", age: 15, email: "rupesh.baral@example.com", gender: "Male", grade: "9", address: "Birgunj, Nepal" },
  { id: 18, name: "Smriti Pokharel", age: 18, email: "smriti.pokharel@example.com", gender: "Female", grade: 12, address: "Bharatpur, Nepal" },
  { id: 19, name: "Sagar Poudel", age: 17, email: "sagar.poudel@example.com", gender: "Male", grade: 11, address: "Lahan, Nepal" },
  { id: 20, name: "Nisha Magar", age: 16, email: "nisha.magar@example.com", gender: "Female", grade: 10, address: "Banepa, Nepal" }
];



// ✅ forEach (2 questions)
// Use forEach to print all student names.


// students.forEach(function(student){

//   console.log(student.name);

// })


// students.forEach((student)=> console.log(student.name))



// Use forEach to print each student’s email and address.


// students.forEach(student=> console.log(` -- ${student.email} ---> ${student.address} `))

// students.forEach

// ✅ some (2 questions)
// Use some to check if any student is from "Kathmandu".



// const is_student_from_ktm = students.some(student=>  student.address === "Kathmandu, Nepal")

// console.log(is_student_from_ktm);

// Use some to check if any student is younger than 16.

// ✅ filter (3 questions)
// Use filter to get all students who are 17 years old.

// Use filter to get all students in grade 12.

  const filteredStudent =  students.filter(student => student.grade === 12 )


  console.log(filteredStudent.length)


// Use filter to get all female students.

// ✅ find (3 questions)
// Use find to get the student with the name "Anjali Rai".

// Use find to get a student from "Butwal".

// Use find to get the first male student.


