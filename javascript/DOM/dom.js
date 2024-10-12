console.log("Hello");


// console.dir(document);




// - Node Type

// element
// text
// comment

// let res = document.createElement('h3');

// let res2 = document.createTextNode("Amar Akbar");

// let res3 = document.createComment("Comment")


// console.log(res);
// console.log(res2);
// console.log(res3);


// Accessing the elements


// getElementsByTagName
// let h1Ele =  document.getElementsByTagName('h1');

// // getElementsByClassName

// let result = document.getElementsByClassName('second');


// let result2 = document.getElementById('first');

// let result3 = document.querySelector('.second')

// let res4 = document.querySelectorAll('.second')


// console.log(result3)
// console.log(res4)

// console.log(document.getElementsByClassName("Random"));

// let body = document.body

// let h1 = document.createElement("h1");


// console.log(body)

// h1.innerText = "Random Text" 

// body.appendChild(h1)



// console.log(h1)


// let userInput  = prompt("What is your name ?");

// let body  = document.querySelector('body');

// let text = document.createTextNode("Hello, " + userInput )

// let h1 = document.createElement('H1');

// h1.appendChild(text)

// body.appendChild(h1)



// removeChild


// let body  = document.querySelector('body');

// let para = document.querySelector('p')


// let confirmation = confirm("Are you really want to remove ?")

// if(confirmation === true){
//   body.removeChild(para)
// }


// replaceChild

// let body  = document.querySelector('body');

// let para = document.querySelector('p')

// let h1 = document.createElement('h1')

// h1.innerText = "This is replaced heading"

// body.replaceChild(h1 , para)


// let userName = prompt("What is your name ?")

// let body = document.body
// let greet = document.getElementById("greet")

// let h1 = document.createElement("h1");


// h1.innerText = `Welcome ${userName}`;

// body.replaceChild(h1, greet)



// cloneNode

// let greet = document.getElementById('greet')

// let copyGreet = greet.cloneNode(true);

// document.body.appendChild(copyGreet)

// console.log(copyGreet)


// getAttribute

// let h1 = document.getElementById("heading")

// console.log(h1.getAttribute("class"));


// setAttribute

// let h1 = document.getElementById("heading");


// setTimeout(function (){
//   h1.setAttribute("class" , "text-red bg-green")
// } , 5000 )


// removeAttribute

//    let h1 = document.getElementById("heading");


//   h1.removeAttribute("id")

// console.log(document.getElementById("heading"))


// let h1 =  document.getElementById("heading")

// let hasClass = h1.hasAttribute('class')

// if(hasClass){
//   console.log("Yes , this has class")
// }else {
// console.log("Not Found")
// }


// h1.style.backgroundColor = "green"

// let h1 = document.getElementById("heading");


// h1.classList.add("font-45");

// h1.classList.remove("bg-yellow");



// document.getElementById("btn").addEventListener("click" , ()=> {
//   h1.classList.toggle("bg-yellow")
// })


// let obj = {
//   name :"Sakshi",
//   address : {
//     city: "Narmadapuram",
//     street : "Housing Board Colony"
//   }
// }


// let clickHandler = () => {

//   if(box.classList.contains("bg-coral")){
//     box.classList.replace('bg-coral' , 'bg-green')
    
//   }else {
    
//     box.classList.replace('bg-green' , 'bg-coral')
//   }


// }


// let box = document.getElementById("btn");

// box.addEventListener("click" , ()=> {
//   console.log("Hello from event listner : Click")
// })


// // box.addEventListener("dblclick" , ()=> {
// //   console.log("Hello from event listner")
// // })

// box.addEventListener("mousedown" , ()=> {
//   console.log("Hello from event listner : Mouse down")
// })

// box.addEventListener("mouseup" , ()=> {
//   console.log("Hello from event listner : Mouse Up")
// })





// let candidates = [
//   "Hemant",
//   "Hrishika",
//   "Lakshya",
//   "Krishna",
// "Prakriti",
// "Sudhanshu",
// ]


// console.log(candidates.reduce((acc, el)=> {
//   if(acc.length !== 5){
//     return Math.random() > 0.5 ?  [...acc , el] : acc
//   }else {
//     return acc
//   }
// } , []))


// let input = document.getElementById("input");


// input.addEventListener("keypress" , (event)=> {

//   console.log(event)

//   if(event.shiftKey === true && event.code === "KeyU" ){
//     confirm("Do you really want to save ?")
//   }
// })


// input.addEventListener("keydown" , ()=> {
//   console.log("Keydown Fired")
// })


// input.addEventListener("keyup" , ()=> {
//   console.log("Key Up Fired")
// })


// input.addEventListener("keypress" , ()=> {
//   console.log("Key Press Fired")
// })










