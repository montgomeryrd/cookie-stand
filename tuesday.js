'use strict';

var store = [];
var hoursOperation = [];
var salesAmounts = [];
var totalSales = 0;

//This is my object constructor
function Stores(name, minCustomers, maxCustomers, avg, hoursOfOperation, salesAmounts, totalSales){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  this.hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesAmounts = salesAmounts;
  this.totalSales = totalSales;
  Stores.prototype.hourlySales = function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      this.salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      this.totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    }
    return [this.salesAmounts, this.totalHourlySales];
  };
};

//store locations
var pike = new Stores('pike', 23, 65, 6.3, hoursOperation, salesAmounts, totalSales);
var seaTac = new Stores('seaTac', 3, 24, 1.2, hoursOperation, salesAmounts, totalSales);
var seaCenter = new Stores('seaCenter', 11, 38, 3.7, hoursOperation, salesAmounts, totalSales);
var capHill = new Stores('capHill', 20, 38, 2.3, hoursOperation, salesAmounts, totalSales);
var alki = new Stores('alki', 2, 16, 4.6, hoursOperation, salesAmounts, totalSales);

//Push new objects into the stores array
store.push(pike);
store.push(seaTac);
store.push(seaCenter);
store.push(capHill);
store.push(alki);








//push store objects into data array
for (var i = 0 ; i < stores.length ; i++){
  data.push(
    '<td>' + stores[i].minCustomers + '</td>' +
    '<td>' + stores[i].maxCustomers + '</td>' +
    '<td>' + stores[i].avg + '</td>' +
    '<td>' + stores[i].salesAmounts + '</td>'
  );
}

var table = document.getElementById('table_content');
var data = [];

//Creating Table Rows and Appending to HTML
var tableRow;

for (var l = 0 ; l < salesAmounts.length ; l++){
  data.push('<th>' + salesAmounts[l] + '</th>');
}

for (var m = 0 ; m < data.length ; m++){
  tableRow = document.createElement('tr');
  tableRow.innerHTML = data[j];
  table.appendChild(tableRow);
}
//rg
