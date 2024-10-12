
// const result = fetch("http://192.168.1.1");

// const p1 = new Promise((resolve , reject)=> {

//   setTimeout(()=> {
//     reject("P1 Success")
//   } , 2000)

// });

// const p2 = new Promise((resolve , reject)=> {

//   setTimeout(()=> {
//     resolve("P2 Success")
//   } , 4000)

// });


// const p3 = new Promise((resolve , reject)=> {

//   setTimeout(()=> {
//     resolve("P2 Success")
//   } , 6000)

// });


// p1.then(res=> {
//   console.log(1)
// })
// .then(res=> {
//   console.log(2)
// })
// .catch(err=> {
//   console.log(err)
// })
// .then(res=> {
//   console.log(3)
// })
// .then(res=> {
//   console.log(4)
// })


// document.getElementById('btn').addEventListener('click', ()=> {
//   console.log("Clicked")
// })



let date = new Date();



// console.log(this); // window


// Global Scope => Global Object;



// Inside a Method

// let obj = {
//   a: 5,
//   print: function () {
//     console.log(this)
//   }
// }


// obj.print()


// Inside a Constructor

let obj2 = {
  a: 5,
  print: function () {

   -  `+  `

    function middle() {
      var name = "Kuchh Bhi";
console.log(this)
      var inner = () => {
        console.log(this)

      }

      inner()
    }

    middle()
  }


}

obj2.print()

// let car1 = new Car("Blue")
// let car2 = new Car("RED")

// car1.print()

// obj2.print();



// console.log(car1)
// console.log(car2)



// student = {
//   name : "Himanshu",
//   printName : function( ) {
//     console.log(this)
//   }
// }


function greet () {
  console.log(this)
}

window.greet()

// window.student.printName()















































// Promise.all([p1 , p2]).then((res)=> {
//   console.log(res);
// }).catch((err)=> {
//   console.log(err)
// });


// Promise.allSettled([p1 , p2]).then((res)=> {
// console.log(res)
// }).catch((err)=> {
//   console.log(err)
// });


// Promise.race([p1 , p2]).then((res)=> {
//   console.log(res)
// }).catch((err)=> {
//   console.log(err)
// });


// Promise.any([p1, p2]).then((res)=> {
//   console.log(res)
// }).catch((err)=> {
//   console.log(err)
// })








