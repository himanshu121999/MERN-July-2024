
let grandFather = document.getElementById("grandFather");
let father = document.getElementById("father");
let child = document.getElementById("child");

grandFather.addEventListener('click' , ()=> {
  console.log("Grand Father Clicked")
} )

father.addEventListener('click' , (event)=> {
  console.log("Father Clicked");
  event.stopPropagation()
})

child.addEventListener('click' , (event)=> {
  console.log("Child Clicked");
  event.stopPropagation()
})


// Event Propagation