
// let greet = "Hello John , Good evening";


// let sent  = `'John said "He is going to market" '` 

// let para = `hello sir, 
//                       I beg to say that
// `

// let firstName = "Arpita";
// let lastName = "Joshi";

// // Template Literal

// // String Interpolation
// let fullName  = `Hello ${firstName} ${lastName}`

// console.log(fullName);


// let sentance  = "John said \n  \"He is going to market\" " ;

// console.log(sentance);


// // escape character


// let productName = "Apple Watch";


// // length
// console.log(productName.length);

// let password = 'abc@1234';

// if(password.length < 8 ){
//   console.log('Use strong pass')
// }


// properties => Info
// methods => Actions




// =>>> charAt;

// console.log(fullName.charAt(30));



// =>>> charCodeAt

// console.log(fullName.charCodeAt(2));



// =>>> indexOf

// console.log(fullName.indexOf("h" ,1));



// =>>> lastIndexOf

// console.log(fullName.lastIndexOf("o",-1))

let fullName = "John Doe";

// =>>> includes
// console.log(fullName.includes("J" , 2))



// =>>> startsWith
// console.log(fullName.startsWith("John"))



// =>>> endsWith
// console.log(fullName.endsWith("e" ,8))




// =>>> concat

// let name = "John"

// let greet = `hello ${name}` // template literals


// let para = " Hello , my name is  \"Khan\" "



// let greet = "Good";
// let time = "Morning";




// let country = "INDIA ";

// // console.log(country.toLowerCase().toUpperCase());

// // console.log(country)


// // slice

// console.log(country.slice(-3 , -2));


// console.log(country.substring(-1));

// console.log(country.substr(2, 1))


// let mobile = "     456789086   ";


// console.log(mobile.trim());

// console.log(mobile.trimStart())


// console.log(mobile.trimEnd())


// //repeat

// console.log(country.repeat(6))

// let para = "Hello HTML";

// let result = para.replace("HTML" , "JAVASCRIPT");

// console.log(result)


// let counting  = "567896567899777777";

// console.log(counting.padEnd(11,  "0"))


// let skills = "HTML|Css|JS|react";


// console.log(skills.split("|" , 3));


// includes

let email = "himanshu@gmail.com";

function isValidEmail(givenString) {
  let result = false;
  if (givenString.includes("@") && !givenString.includes("#")) {
    result = true
  }

  return result
};



// inludes @
// not includes #


// console.log(isValidEmail("abc@gmail.com"));
// console.log(isValidEmail("abcgmail.com"));
// console.log(isValidEmail("abc#gmail.com"));
// console.log(isValidEmail("abc@gmail#.com"));


let mobileNumber = "567876543";


// length = 10;

// start 9 8 7 6;


// function checkValidMobile(mobile) {

//   let result = false;
//   let length = mobile.length;
// let isStartWithValidNumber = mobile.startsWith("9") || mobile.startsWith("8") || mobile.startsWith("7") || mobile.startsWith("6")

//   if (length === 10 && isStartWithValidNumber) {
//     result = true
//   }

//   return result


// }



// console.log(checkValidMobile("5677665431"))
// console.log(checkValidMobile("56776654311"))

// console.log(checkValidMobile("66776654311"))

// console.log(checkValidMobile("6677665431"))

// console.log(checkValidMobile("4677665431"))
// console.log(checkValidMobile("9677665431"))

// console.log(checkValidMobile("7677665431"))
// console.log(checkValidMobile("8677665431"))
// console.log(checkValidMobile("08677665431"))



// function captalize (text){

// // Separation

// let first = text.charAt(0);

// let reaminingText = text.slice(1);


// let upperFirst = first.toUpperCase();

// let lowerremaining = reaminingText.toLowerCase();


// return upperFirst.concat(lowerremaining)



// }

// console.log(captalize("praDyuMn"));

















































