// a.
function Foo () {
  getName = function () {
    console.log(1);
  }
  return this;
 }
 // b.
 Foo.getName = function () {
  console.log(2);
 }
 // c.
 Foo.prototype.getName = function () {
  console.log(3);
 }
 // d.
 var getName = function () {
  console.log(4);
 }
 // e.
 function getName () {
  console.log(5);
 }
 console.log(this)
 Foo.getName(); 
 getName(); 
 Foo().getName(); 
 getName(); 
 new Foo.getName(); 
 new Foo().getName(); 
 new new Foo().getName();


 