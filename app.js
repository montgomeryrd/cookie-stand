'use strict';

var table = document.getElementById('table_content');
var data = [];
var stores = [];
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var salesAmounts = [];
var totalSales = 0;

//This is my object constructor
function Stores(minCustomers, maxCustomers, avg, hoursOfOperation, salesAmounts, totalSales){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  this.hoursOfOperation = hoursOfOperation;
  this.salesAmounts = salesAmounts;
  this.totalSales = totalSales;
}

function hourlySales(){
  for(var i = 0 ; i < hoursOfOperation.length ; i++) {
    var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
    salesAmounts.push(Math.ceil(hourlyCustomers * avg));
    totalHourlySales += (Math.ceil(hourlyCustomers * avg));
    console.log(salesAmounts[i], 'cookies');
  }
  return [salesAmounts, totalHourlySales];
};

Stores.prototype.hourlySales = function() {
  alert('hi');
};


//new locations
var pike = new Stores(23, 65, 6.3, hoursOfOperation, salesAmounts, totalSales);
var seaTac = new Stores(3, 24, 1.2, hoursOfOperation, salesAmounts, totalSales);
var seaCenter = new Stores(11, 38, 3.7, hoursOfOperation, salesAmounts, totalSales);
var capHill = new Stores(20, 38, 2.3, hoursOfOperation, salesAmounts, totalSales);
var alki = new Stores(2, 16, 4.6, hoursOfOperation, salesAmounts, totalSales);

//Push new objects into the cars array
stores.push(pike);
stores.push(seaTac);
stores.push(seaCenter);
stores.push(capHill);
stores.push(alki);

//push car objects into data array
for (var i = 0 ; i < stores.length ; i++){
  data.push(
    '<td>' + stores[i].minCustomers + '</td>' +
    '<td>' + stores[i].maxCustomers + '</td>' +
    '<td>' + stores[i].avg + '</td>' +
    '<td>' + stores[i].salesAmounts + '</td>'
  );
}
