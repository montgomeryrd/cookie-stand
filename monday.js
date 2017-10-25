'use strict';
//My Object Literals

//pike location
var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avg: 6.3,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesAmounts: [],
  totalHourlySales: 0,
  hourlySales: function(){
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
    };
    return [this.salesAmounts, this.totalHourlySales];
  }
};

//Calculate Projected Cookie Sales per Hour
pike.hourlySales();

//Append to HTML
function pikeToDom(){
  var container = document.createElement('div');
  container.innerHTML = '<p>Projected Sales per Hour at Pike</p>';
  var total = document.createElement('p');
  total.innerHTML = 'Total Sales:' + pike.totalHourlySales;

  document.body.appendChild(container);
  document.body.appendChild(total);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers the Hours and the Projected Sales.
  for(var i = 0 ; i < pike.hoursOperation.length ; i++) {
    listArr.push('<li>' + pike.hoursOperation[i] + ': ' + pike.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

pikeToDom();


//seaTac location
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avg: 1.2,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesAmounts: [],
  totalHourlySales: 0,
  hourlySales: function(){
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
    };
    return [this.salesAmounts, this.totalHourlySales];
  }
};

//Calculate Projected Cookie Sales per Hour
seaTac.hourlySales();

//Append to HTML
function seaTacToDom(){
  var container = document.createElement('div');
  container.innerHTML = '<p>Projected Sales per Hour at SeaTac</p>';
  var total = document.createElement('p');
  total.innerHTML = 'Total Sales:' + seaTac.totalHourlySales;

  document.body.appendChild(container);
  document.body.appendChild(total);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers the Hours and the Projected Sales.
  for(var i = 0 ; i < seaTac.hoursOperation.length ; i++) {
    listArr.push('<li>' + seaTac.hoursOperation[i] + ': ' + seaTac.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

seaTacToDom();


//seaCenter location
var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avg: 3.7,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesAmounts: [],
  totalHourlySales: 0,
  hourlySales: function(){
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
    };
    return [this.salesAmounts, this.totalHourlySales];
  }
};

//Calculate Projected Cookie Sales per Hour
seaCenter.hourlySales();

//Append to HTML
function seaCenterToDom(){
  var container = document.createElement('div');
  container.innerHTML = '<p>Projected Sales per Hour at SeaCenter</p>';
  var total = document.createElement('p');
  total.innerHTML = 'Total Sales:' + seaCenter.totalHourlySales;

  document.body.appendChild(container);
  document.body.appendChild(total);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers the Hours and the Projected Sales.
  for(var i = 0 ; i < seaCenter.hoursOperation.length ; i++) {
    listArr.push('<li>' + seaCenter.hoursOperation[i] + ': ' + seaCenter.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

seaCenterToDom();


//capHill location
var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avg: 2.3,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesAmounts: [],
  totalHourlySales: 0,
  hourlySales: function(){
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
    };
    return [this.salesAmounts, this.totalHourlySales];
  }
};

//Calculate Projected Cookie Sales per Hour
capHill.hourlySales();

//Append to HTML
function capHillToDom(){
  var container = document.createElement('div');
  container.innerHTML = '<p>Projected Sales per Hour at CapHill</p>';
  var total = document.createElement('p');
  total.innerHTML = 'Total Sales:' + capHill.totalHourlySales;

  document.body.appendChild(container);
  document.body.appendChild(total);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers the Hours and the Projected Sales.
  for(var i = 0 ; i < capHill.hoursOperation.length ; i++) {
    listArr.push('<li>' + capHill.hoursOperation[i] + ': ' + capHill.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

capHillToDom();


//Alki location
var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avg: 4.6,
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesAmounts: [],
  totalHourlySales: 0,
  hourlySales: function(){
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
    };
    return [this.salesAmounts, this.totalHourlySales];
  }
};

//Calculate Projected Cookie Sales per Hour
alki.hourlySales();

//Append to HTML
function alkiToDom(){
  var container = document.createElement('div');
  container.innerHTML = '<p>Projected Sales per Hour at Alki</p>';
  var total = document.createElement('p');
  total.innerHTML = 'Total Sales:' + alki.totalHourlySales;

  document.body.appendChild(container);
  document.body.appendChild(total);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers the Hours and the Projected Sales.
  for(var i = 0 ; i < alki.hoursOperation.length ; i++) {
    listArr.push('<li>' + alki.hoursOperation[i] + ': ' + alki.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

alkiToDom();
