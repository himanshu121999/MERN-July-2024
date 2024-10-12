
// let name = document.getElementById("name");
// let email = document.getElementById("email");

// email.classList.add("")
// email.classList.remove("")
// email.classList.replace("")
// email.classList.toggle("")


// name.addEventListener("change" , (event)=> {
//   console.log(event.target.value)
// })

// email.addEventListener('input' , (event)=> {
//   console.log(event.target.value)
// })

// email.addEventListener("focus" , ()=> {
//   console.log("Focussed")
// })

// name.addEventListener("blur" , ()=> {
//   console.log("Blur")
// })


// let form = document.getElementById("login");

// form.addEventListener("submit" , (event)=> {
//   event.preventDefault();

//   console.log({
//     name : name.value,
//     email: email.value
//   })
// })



// form.addEventListener("reset" , ()=> {
//   console.log("Form Reset")
// });


let string = "sdfsdfydfds"
let splittedArr = string.split("");

let result = '' // a2b3c2
let currentSeries = splittedArr[0] // a
let count = 0 // 2



for(let char of splittedArr) {
  // a
  if(char === currentSeries){
    count ++
  }else {
    result = result + currentSeries + count;
    currentSeries = char
    count = 1
  }
}


console.log(result + currentSeries + count)

