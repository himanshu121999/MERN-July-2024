

// Write a fn to find the student by the given name

let students = [
  {
    name: "Zaid",
    age: 21
  },
  {
    name: "Hasan",
    age: 22,
  },
  {
    name: "Siya",
    age: 20
  }
]


function getStudent(kuchhBhi){
  let result = students.find(function(ele){
    return ele.age === kuchhBhi
  })

  return result
}



let student = getStudent(21);

console.log(student) // {name: "Zaid" , age: 21}


// WAF to store a data in a new array who can vote
let persons = [
  {
    name: "A",
    age : 18
  },
  {
    name: "B",
    age : 15
  },
  {
    name: "C",
    age : 40
  },
  {
    name: "D",
    age : 19
  },
  {
    name: "E",
    age : 17
  }

];



function voters() {
 

  // for(let ele of persons){
  //   if(ele.age >= 18){
  //     result.push(ele)
  //   }
  // }

  // persons.forEach(function(ele){
  //      if(ele.age >= 18){
  //     result.push(ele)
  //   }
  // })

 return persons.filter(function(ele){
      return ele.age >= 18
  })
 
}







let eligiblePersons = voters() ;

console.log(eligiblePersons)


let marks = [89, 67, 89 , 67 ,56 , 45, 99 , 98];



function getGreatest () {
  let greatest = marks[0]; // 99

  marks.forEach(function(ele){
    if(ele > greatest)[
      greatest = ele
    ]
  })

  return greatest
}

console.log(getGreatest())





// [
  
   
//     {
//       name: "C",
//       age : 40
//     },
//     {
//       name: "D",
//       age : 19
//     }
   
// ]








