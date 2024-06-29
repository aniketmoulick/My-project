function person (first,last,age,eyecolor) {
  this. firstName = first;
  this. lastName = last;
  this. age = age;
  this.eyeColor=eyecolor;
  this.fullName = function() {
   return this.firstName + " " + this.lastName;
  };
}