'use strict';

//My sweet, sweet Variables
var form = document.getElementById('store_location');
var tableHead = document.getElementById('table_head');
var table = document.getElementById('table_content');
var store_locations = [];
var hoursOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//My constructor function for new locations
function Stores(name, minCustomers, maxCustomers, avg){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  this.salesAmounts = [];
  this.totalHourlySales = 0;
}
//My method that calculates projected sales per hour and total sales
Stores.prototype.hourlySales = function(){
  var min = this.minCustomers;
  var max = this.maxCustomers;
  var avg = this.avg;
  var hourlyCustomers;

  for(var i = 0 ; i < hoursOperation.length ; i++) {
    hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
    this.salesAmounts.push(Math.ceil(hourlyCustomers * avg));
    this.totalHourlySales += (Math.ceil(hourlyCustomers * avg));
    console.log(this.salesAmounts[i], 'cookies');
    console.log('Total Sales', this.totalHourlySales);
  }

};
//Create a TABLE!
Stores.prototype.createTable = function() {
  var row = document.createElement('tr');
  var td = '<td>' + this.name + '</td>';
  for(var j = 0 ; j < this.salesAmounts.length ; j++) {
    td += '<td>' + this.salesAmounts[j] + '</td>';
  }
  td += '<td>' + this.totalHourlySales + '</td>';
  row.innerHTML = td;
  console.log(row);
  table.appendChild(row);

  /*Total Sales per Hour at each Location... Needs work!!!
  for(var i = 0 ; i < store_locations.length ; i++){
    var hourlySales = store_locations.salesAmounts[i];
    hourlySales += hourlySales;
    console.log('Total per Hour:', hourlySales);
  }*/
};

form.addEventListener('submit', formData);

//This is my form function that stores the form fill
function formData(event) { //event that we will trigger
  event.preventDefault(); //doesn't refresh form

  //event.target = Wherever it's fired from.
  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avg = event.target.avg.value;

  if(Number(minCustomers) < Number(maxCustomers)) {
    var storeOne = new Stores(name, minCustomers, maxCustomers, avg);
    storeOne.hourlySales();
    console.log('store one:', storeOne);
    store_locations.push(storeOne);
    storeOne.createTable();
    form.reset();
  } else {
    alert('Maximum Customers must be greater than Minimum Customers');
  }
};

//MY TABLE! Top Headers...
function header(){
  var newRow = document.createElement('tr');

  newRow.innerHTML += '<th></th>';
  for(var i = 0 ; i < hoursOperation.length ; i++) {
    var newTableHead = document.createElement('th');
    newTableHead.innerHTML += hoursOperation[i];
    newRow.appendChild(newTableHead);
  };
  newRow.innerHTML += '<th>Daily Location Total</th>';
  tableHead.appendChild(newRow);
};

header();
