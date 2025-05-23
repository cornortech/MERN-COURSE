
// array destructuring [ ]
// position matters 

const students = ["ashwin","sushant"];


// normal way of accessing elements from array

console.log(students[0]) // ashwin 
console.log(students[1]) // sushant

// destructuring array and accessing elements


const [sushantStudent,ashwnStudent,thirdStudent] = ["ashwin","sushant"];


console.log(sushantStudent)  



// object destructuring

const person ={
    name:"ram",
    address:"Spritual Kingdom",
}

// normal way of accessing properties from object

console.log(person.name)
console.log(person.address)



const { name, address   , brothers : [firstValue,secondValue] } = {
    name:"ram",
    address:"Spritual Kingdom",
    brothers:["laxman","satrugan","bharat"]
}

console.log(address,name,brothers)
console.log(secondValue )
