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
    return ['Total Sales: ' + totalHourlySales];
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
    return ['Total Sales: ' + totalHourlySales];
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
    return ['Total Sales: ' + totalHourlySales];
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
    return ['Total Sales: ' + totalHourlySales];
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
    return ['Total Sales: ' + totalHourlySales];
  }
};

alki.hourlySales();


//Build into an Unordered list
var build = function(){
  for(var i = 0 ; i < salesAmounts.length ; i++) {
    var eachSale = [];
    var salesTotal;
    salesAmounts[i].hourlySales();
    var storeSales = doc.createElement('ul');
    for(var j = 0 ; j < salesArray[i].salesAmounts.length ; j++) {
      eachSale.push('<li>' + salesAmounts[i].hoursOperation[j] + ': ' + salesArray[i].eachSale[j] + '</li>');
    }
  }
};


function domStuff(){
  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers riker's hobbies into list elements, but not yet into the ul.
  for(var j = 0 ; j < this.salesAmounts.length ; j++) {
    listArr.push('<li>' + this.salesAmounts[j] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

domStuff();
