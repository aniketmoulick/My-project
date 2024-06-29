// Create an Object
const person = {
  name : "John",
  age : 30,
  city : "New York"

};

//  Stringfy Object
let mystring = JSON.stringify(person);

// Display string
document.getElementById("demo").innerHTML=mystring;