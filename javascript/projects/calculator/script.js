

let query  = ""

let buttons = document.getElementsByClassName("btn");

let display = document.querySelector('.display')

Array(...buttons).forEach((ele)=> {
  ele.addEventListener('click' , (event)=> {

    if(event.target.innerText === "=") {
      display.innerText = eval(query)
      query = ""
    }else {
      query += event.target.innerText
      display.innerText = query   


      
    }

  })
})


