'use strict';

//My sweet, sweet Variables
var form = document.getElementById('store_location');
var tableHead = document.getElementById('table_head');
var table = document.getElementById('table_content');
var data = [];
var stores = [];
var hoursOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//My constructor function for new locations
function Stores(name, minCustomers, maxCustomers, avg){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  //My method that calculates projected sales per hour and total sales
  Stores.prototype.hourlySales = function(){
    this.salesAmounts = [];
    this.totalHourlySales = 0;
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var hourlyCustomers;
    for(var i = 0 ; i < hoursOperation.length ; i++) {
      hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      this.salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      this.totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(this.salesAmounts[i], 'cookies');
    }
    return [this.salesAmounts, this.totalHourlySales];
    this.hourlySales();
  };
};

//Stores the form fill
function formData(event) { //event that we will trigger
  event.preventDefault(); //don't refresh form

  //event.target = Wherever it's fired from.
  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avg = event.target.avg.value;

  if(Number(minCustomers) < Number(maxCustomers)) {
    data.push(new Stores(name, minCustomers, maxCustomers, avg));
    console.log(stores);
    createTable();
    form.reset();
  } else {
    alert('Maximum Customers must be greater than Minimum Customers');
  }
};

//MY TABLE! Top Headers...
var newRow = document.createElement('tr');
var newTableHead = document.createElement('th');
newRow.appendChild(newTableHead);

for (var i = 0 ; i < hoursOperation.length ; i++) {
  var newTableHead = document.createElement('th');
  newTableHead.innerHTML = hoursOperation[i];
  newRow.appendChild(newTableHead);
};

tableHead.appendChild(newRow);

//Create a Fuckin TABLE!
function createTable() {
  var row;
  var info = [];
  for(var i = 0 ; i < this.salesAmounts.length ; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + this.salesAmounts[i] + '</td>';
  }

  table.appendChild(row);
}

form.addEventListener('submit', formData);

//My method to push data into data array
Stores.prototype.rows = function(){
  var data = [];
  for (var i = 0 ; i < this.salesAmounts[i] ; i++){
    data.push('<th>' + this.name + '</th>' +
    '<td>' + this.salesAmounts[0] + '</td>');
  }
};
