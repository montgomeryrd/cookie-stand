'use strict';

//This is my object constructor
function Stores(name, minCustomers, maxCustomers, avg){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  this.hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
};

//My method that calculates projected sales per hour and total sales
Stores.prototype.hourlySales = function(){
  this.salesAmounts = [];
  this.totalHourlySales = 0;
  var min = this.minCustomers;
  var max = this.maxCustomers;
  var avg = this.avg;
  var hourlyCustomers;
  for(var i = 0 ; i < this.hoursOperation.length ; i++) {
    hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
    this.salesAmounts.push(Math.ceil(hourlyCustomers * avg));
    this.totalHourlySales += (Math.ceil(hourlyCustomers * avg));
    console.log(this.salesAmounts[i], 'cookies');
  }
  return [this.salesAmounts, this.totalHourlySales];
};

var table = document.getElementById('table_content');

//My method to push data into data array
Stores.prototype.rows = function(){
  var data = [];
  for (var i = 0 ; i < 1 ; i++){
    data.push('<th>' + this.name + '</th>' +
    '<td>' + this.salesAmounts[0] + '</td>' +
    '<td>' + this.salesAmounts[1] + '</td>' +
    '<td>' + this.salesAmounts[2] + '</td>' +
    '<td>' + this.salesAmounts[3] + '</td>' +
    '<td>' + this.salesAmounts[4] + '</td>' +
    '<td>' + this.salesAmounts[5] + '</td>' +
    '<td>' + this.salesAmounts[6] + '</td>' +
    '<td>' + this.salesAmounts[7] + '</td>' +
    '<td>' + this.salesAmounts[8] + '</td>' +
    '<td>' + this.salesAmounts[9] + '</td>' +
    '<td>' + this.salesAmounts[10] + '</td>' +
    '<td>' + this.salesAmounts[11] + '</td>' +
    '<td>' + this.salesAmounts[12] + '</td>' +
    '<td>' + this.salesAmounts[13] + '</td>' +
    '<td>' + this.totalHourlySales + '</td>');
  }

  //append to html
  var newRow;

  for (var j = 0 ; j < 1 ; j++){
    newRow = document.createElement('tr');
    newRow.innerHTML = data[j];
    table.appendChild(newRow);
  }
};

//store locations
var pike = new Stores('pike', 23, 65, 6.3);
pike.hourlySales();
pike.rows();

var seaTac = new Stores('seaTac', 3, 24, 1.2);
seaTac.hourlySales();
seaTac.rows();

var seaCenter = new Stores('seaCenter', 11, 38, 3.7);
seaCenter.hourlySales();
seaCenter.rows();

var capHill = new Stores('capHill', 20, 38, 2.3);
capHill.hourlySales();
capHill.rows();

var alki = new Stores('alki', 2, 16, 4.6);
alki.hourlySales();
alki.rows();

//Push new objects into the store array
var store = [];

store.push(pike);
store.push(seaTac);
store.push(seaCenter);
store.push(capHill);
store.push(alki);
