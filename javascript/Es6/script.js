

// Default Parameter


const greet = (name = "Geeks", age = 25) => {
  console.log(`Hello ${name} ${age}`)
}

greet("Ashvini") // Hello Geeks



// Spread Operator

const bolls = ["B-1", "B-2", "B-3"];

// console.log(bolls)
// console.log(...bolls)

let box = [...bolls];

console.log(box)


// Rest

const students = [
  {
    name: "Hasan",
    age: 20,
    batch: "MERN"
  },
  {
    name: "Zaid",
    age: 20,
    batch: "MERN"
  },
  {
    name: "Mazhar",
    age: 20,
    batch: "MERN"
  }
]


let transformmed = [];

students.forEach((element) => {
  console.log(element)

  let newObj = {
    ...element,
    batch: "MERN JUL 24",
    newKey: "New Value"
  }

  transformmed.push(newObj)
})

console.log(transformmed)



// [
//   {
//     name: "Hasan",
//     age: 20,
//     batch : "MERN JUL 24"
//   },
//   {
//     name: "Zaid",
//     age: 20,
//     batch : "MERN JUL 24"
//   },
//   {
//     name: "Mazhar",
//     age: 20,
//     batch : "MERN JUL 24"
//   }
// ]


// Object Destructuring

const studentInfo = {
  name: "A",
  age: 20
}



// let fullName = studentInfo.name;
// let studentAge = studentInfo.age;

let { name: fullName, age: studentAge } = studentInfo

console.log(fullName)
console.log(studentAge)


// Array Destructuring

const age = [23, 45, 65, 24]

// let A = age[0];
// let B = age[1];
// let C = age[2];
// let D = age[3];

let [A, B, C, D] = age

console.log(B)






function printStudentInfo({ name, age, ...other }) {

  console.log(name)
  console.log(age)
  console.log(other)

}

printStudentInfo({
  name: "ABC",
  age: 34,
  address: "adfdf",
  email: "dfdfds",
  mobile: "dfdf",
  fax: "dfdf",
  linkedIn: "fdsf"
})



function printStudentName(studentData) {

  const { name, address:{city , state}  } = studentData;

  console.log(name);
  console.log(city);
  console.log(state);

}


printStudentName({ name: "A", age: 23, address: { city: "Indore", state: "MP" }, email: "email.com", mobile: "dfdf" })











































