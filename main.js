//preloader

$(window).on("load",function(){
  $('.preloader').fadeOut('.hidePreloader');
});



const CreateCars = (() => {
  //(test ex:)console.log('hiii');
  //car data
  const cars = [];
  //car class (will be for each 7 every car)
  //class used to represent cars

  class Car {
    constructor(make, country, img, special, model, price,
      type, trans, gas) {
      //set parameters equal to certain values
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.gas = gas;
    }
  }

  //function used to create cars, function will push each car into the array(above)
  function makeCar(make, country, img = 'img/car-default.jpg', special = true, model = 'new model', price = 55000, type = 'sedan',
    trans = 'automatic', gas = '33') {
      //new instance of the class
      const car = new Car(make, country, img, special, model, price,
      type, trans, gas);
      //push instance to empty array
      cars.push(car)
    }

    //produce cars function
    function produceCars(){
      makeCar('chevy', 'american', 'img/american3.jpg');
      makeCar('chevy', 'american', 'img/american1.jpg', true);
      makeCar('chevy', 'american', 'img/american2.jpg');
      makeCar('chevy', 'american', 'img/american3.jpg', false, 'some model');
      makeCar('chevy', 'american', 'img/american4.jpg', undefined, 'other model');
      makeCar('chevy', 'american', 'img/american5.jpg', false);
      //german cars
      makeCar('bmw', 'german', 'img/german1.jpg', false);
      makeCar('bmw', 'german', 'img/german2.jpg');
      makeCar('bmw', 'german', 'img/german3.jpg', false);
      makeCar('bmw', 'german', 'img/german4.jpg', false);
      makeCar('bmw', 'german', 'img/german5.jpg', false);
    }
    // instantiate/represent function produceCars
    produceCars();
    // console.log(cars);
    //special cars array, cars with value of special set = to true
    //filter through array & set value for special cars to true
    const specialCars = cars.filter(car => car.special === true)
      // console.log(specialCars);
    // (test) makeCar('chevy', 'american');
    // (test) console.log(cars);

    //return with 2 objects to access properties/cars
    return {
      cars,
      specialCars
    }

})();

//console.log(CreateCars.cars);
//console.log(CreateCars.specialCars);

//new module to display the special cars
const DisplaySpecialCars = ((CreateCars) => {
  const specialCars = CreateCars.specialCars;
  //console.log(specialCars);
  //targetting featured info from index.html & making it empty/no value
  const info = document.querySelector('.featured-info');
  //select event listener from the DOM & add to the document/website once it's loaded
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';
    //loop through special cars array & display special cars
    let data = '';
    //forEach uses callback function to accept parameter of item
    specialCars.forEach(item => {
      //add values to the data
      data += `<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
        <span data-img="${item.img}" class="featured-icon mr-2">
          <i class="fas fa-car"></i>
        </span>
        <h5 class="font-weight-bold mx-1">${item.make}</h5>
        <h5 class="mx-1">${item.model}</h5>
      </div>`
    })

    //after looping through array set data & use it (inner.HTML)
    info.innerHTML = data;

  })


//actually change image on featured cars selected using Event Listener
  info.addEventListener('click', (event) => {

  //event to target , make sure we are targetting correct parent for image (span)
  if (event.target.parentElement.classList.contains('featured-icon')) {
    //target image attribute
    //*important tip, dataset is set to img because we did that in the HTML for featured item, but if we used a different dataset we would have to use that instead at the end instead of img
    //* <span data-img (above)
    const img = event.target.parentElement.dataset.img;
    document.querySelector('.featured-photo').src = img;
  }


})
//passing CreateCars as argument
})(CreateCars);



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
