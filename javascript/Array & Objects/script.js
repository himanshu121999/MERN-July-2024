// console.log("Hello GD");

let students = []; //empty

let studentNames = ["Nurelal", "Hasan", "Gourav", "Sourabh", 1, 5, 'Sourabh', "Sourabh"];
// console.log(studentNames.length);


console.log(studentNames[7]);


// indexOf
console.log(studentNames.indexOf("Hasan"));


// lastIndexOf

console.log(studentNames.lastIndexOf('Sourabh'))


// includes
console.log(studentNames.includes('hasan'));


let songs = [
  {
    title: "Aashiqui 2",
    singers: ['Ankit', "Sonu"]
  }
  ,

  {
    title: "Making Memories",
    singers: ['Ankit', "Sonu"]
  }
  ,
  {
    title: "Aashiqui 3",
    singers: ['Arijit']
  }

]


console.log(songs[1]);



let ages = [23, 45, 12, 67, 34, 28, 16];


// loop

// condition

// find index


// function findIndex(condition) {


//   for (let i = 0; i < ages.length; i++) {
// let result = condition(ages[i]);
//     if (result) {
//     return i
//     }
//   }
// }

// console.log(findIndex(function(el){
//   return el > 60
//   }))

//   console.log(findIndex(function(el){
//     return el > 30
//   }))

// console.log(ages.findIndex(function (age){
// return  age > 60
// }));



let studentMarks = [89, 90, 67, 99, 100, 33];

// for(let i = 0; i < studentMarks.length; i++){
//   console.log(studentMarks[i])
// };

// for(let marks of studentMarks){
//   console.log(marks)
// }


// forEach;

// function inner (ele){
// console.log(ele / 100 )
// }

// studentMarks.forEach(inner)


// // annonymus

// let numbers = [1 , 6 , 8 , 9];


// let sum = 0;
// numbers.forEach(function (ele){

//   sum += ele;


// })

// console.log(sum);


// let marks = [45 , 30 , 78 , 32 , 31];


// function check(ele){
//   return ele % 2 === 0
// }

//  let index =  marks.findIndex(check)

// console.log(index)


// // find

// let element = marks.find(check);

// console.log(element)


// let rsult = marks.forEach(check)
// console.log(rsult)


// let marks = [45 , 30 , 78 , 32 , 31];

// let class7Marks = [34 , 56  , 67];

// let other = [3, 5]
// // [45 , 30 , 78 , 32 , 31 , 34 , 56 , 67]


// // concat
// console.log(marks.concat(class7Marks , other));



// let paras = ["Hello" , "Geeksdoor" , "How" , "Are" , "You ?"];


// console.log(paras.join("-"))



// let sent = "Hello Geeksdoor";


// console.log(sent.split(" "))


// // fill

// // console.log(marks.fill("Hello" , 2 , 4));

// // console.log(marks);


// // reverse  [Mutate the same array]
// console.log(marks.reverse());

// console.log(marks)





// push
// let result = marks.push(50)
// console.log(result)
// console.log(marks)

// pop

// let popR = marks.pop()
// console.log(popR)


// unshift
// let r=  marks.unshift(29);
// console.log(r)


// shift
// marks.shift()
// console.log(marks)

// slice

// let slicesd = marks.slice(1 , 3)
// console.log(slicesd)

// console.log(marks)



// splice

// let spilied = marks.splice(2  , 1 , 56 , 45)

// console.log(spilied);

// console.log(marks);


// let marks = [45, 67, 78, 89, 33, 28, 18];


// // [28 , 18]

// let filteredMarks = marks.filter(function (ele) {
//   return !(ele % 2);
// });


// console.log(filteredMarks);


// type conversion;

// dynamically types lang;



// filter

// let filtered = products.filter(function(product){
  
//   return product.title === "Iphone"

// })


// console.log(filtered);

// let voters = [4, 18 , 17 , 13 , 15];


// let isAllMajor = voters.every(function(ele){
  //   console.log(ele);
  //   return ele > 10;
  // })
  
  // console.log(isAllMajor)
  
  
  // let isAnyMajor = voters.some(function(ele){
    //   return ele > 18
    // })
    
    // console.log(isAnyMajor)
    
    
    
    // let marks = [33, 45, 67, 89];
    
    // let result = marks.map(function(ele){
      //   return ele + 5
      // });
      
      // console.log(result)
      
      
      // let products = [
      //   {
      //     title : "Iphone",
      //     price : 123000,
      //   },
      //   {
      //     title: "Watch",
      //     price : 5000,
      //   },
      //   {
      //     title : "Mobile",
      //     price : 12000
      //   },
      //   {
      //     title: "Iphone",
      //     price : 84000
      //   }
      // ];
      
      // let trfrd = products.map(function(ele){
      //   return `hello`
      // })
      
      // console.log(trfrd)


let marks = [45 , 26 , 85 , 86  ,12 , 67];

// [12,26,45,85,86];


let products = [
  {
    price: 5000
  },
  {
    price : 8000
  },
  {
    price : 2000
  },
  {
    price: 9000
  }
];

let lowToHigh = products.sort(function(a, b){
  return b.price - a.price
});


let a  = [45, 85 , 78 , 96];

let b = [96, 78 , 45, 85];

let sortedA = a.sort(); 

let sortedB = b.sort();

console.log(sortedA)
console.log(sortedB);


// copyWithin
let arr = [1 , 2 , 3 , 4 , 5 , 6];

// 1 , 2 , 3


arr.copyWithin(3 , 0 , 3)

console.log(arr);










// console.log(lowToHigh)



// console.log(marks)












// filter(marks , function(ele){
  // return ele > 30
  // })
  
  
  
  
  
  






























  
  
  // reduce


// let numbers = [1 , 2 , 3 , 4 , 5];





// let sumByReduce = numbers.reduce(function(accumulated , ele)  {

// return accumulated * ele

// },  1);


// console.log(sumByReduce);












































































































































































