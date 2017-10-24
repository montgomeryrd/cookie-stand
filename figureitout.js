'use strict';

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
  },
  details: function() {
    this.hourlySales();
    return 'Total cookies sold: ' + totalHourlySales;
  }
};

function domStuff(){
  var container = document.createElement('div');
  container.innerHTML = '<p>' + alki.details(); + '</p>';

  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers riker's hobbies into list elements, but not yet into the ul.
  for(var i = 0 ; i < alki.salesAmounts.length ; i++) {
    listArr.push('<li>' + alki.salesAmounts[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

domStuff();
