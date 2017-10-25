'use strict';

//pike location
var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avg: 6.3,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlySales: function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales = 0;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    };
    return [salesAmounts, totalHourlySales];
  }
};

pike.hourlySales();

//seaTac location
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avg: 1.2,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlySales: function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales = 0;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    };
    return [salesAmounts, totalHourlySales];
  }
};

seaTac.hourlySales();

//seaCenter location
var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avg: 3.7,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlySales: function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales = 0;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    };
    return [salesAmounts, totalHourlySales];
  }
};

seaCenter.hourlySales();

//capHill location
var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avg: 2.3,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlySales: function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales = 0;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    };
    return [salesAmounts, totalHourlySales];
  }
};

capHill.hourlySales();

//Alki location
var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avg: 4.6,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlySales: function(){
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var avg = this.avg;
    var salesAmounts = [];
    var totalHourlySales = 0;
    for(var i = 0 ; i < this.hoursOperation.length ; i++) {
      var hourlyCustomers = Math.floor(Math.random() * (max - min)) + min;
      salesAmounts.push(Math.ceil(hourlyCustomers * avg));
      totalHourlySales += (Math.ceil(hourlyCustomers * avg));
      console.log(salesAmounts[i], 'cookies');
    };
    return [salesAmounts, totalHourlySales];
  }
};

alki.hourlySales();

//append to html
var newRow;

for (var j = 0 ; j < data.length ; j++){
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
