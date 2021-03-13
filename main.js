//preloader

$(window).on("load",function(){
  $('.preloader').fadeOut('.preloader')
});

const CreateCars = (() => {
  console.log('hiii');
})();


//invoked function expression

//declare function ex: function sayHi() {
//invoke function ex: console.log('hello');
// ex: }

//immediately invoked function
//(ex) var name = 'Everett';
//(ex) console.log(name);
// should output/log 'Everett'
// (ex)console.log('hiii');
//should log 'hiiii'
// (ex) })();




//our modules

//iife example: immediately invoked function expression

//ex: var Module = (function () {

//private variable
//ex: var counter = 0;

// ex: function addCount() {
// ex:  counter++;
// ex: }
// ex: function show() {
// ex: console.log(counter);
// ex: }

// ex: return {
// ex: addCount: addCount,
// ex: show: show
// ex: }
// ex: })(); //showing it is equal to the method (addCount & show)


//ES6 function

//if no parameters are being passed, arrow function can be left empty like below
// (ex) const ES6Module = (() => {

  //private variable
  //let counter = 0;

  // (ex)function addCount() {
  // (ex)  counter++;
// (ex)  }
// (ex)  function show() {
// (ex)    console.log(counter);
// (ex)  }

  // (ex)return {
  // (ex)  addCount,
  // (ex)  show
// (ex)  }
// (ex) })();
