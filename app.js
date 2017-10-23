'use strict';

/*Each Location
var pike = {
  customerMin: 23,
  customerMax: 65,
  avg: 6.3,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (pike.customerMax - pike.customerMin)) + pike.customerMin;
  },
  hoursOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}*/


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
      console.log('hourly sales:', salesAmounts[i]);
      console.log('total hourly sales:', totalHourlySales);
    };
    return[totalHourlySales, salesAmounts];
  }
};

var seaTac = {
  customerMin: 3,
  customerMax: 24,
  avg: 1.2,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (seaTac.customerMax - seaTac.customerMin)) + seaTac.customerMin;
  }
};

var seaCenter = {
  customerMin: 11,
  customerMax: 38,
  avg: 3.7,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (seaCenter.customerMax - seaCenter.customerMin)) + seaCenter.customerMin;
  }
};

var capHill = {
  customerMin: 20,
  customerMax: 38,
  avg: 2.3,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (capHill.customerMax - pike.customerMin)) + pike.customerMin;
  }
};

var alki = {
  customerMin: 2,
  customerMax: 16,
  avg: 4.6,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (alki.customerMax - alki.customerMin)) + alki.customerMin;
  }
};

var locations = [pike, seaTac, seaCenter, capHill, alki];





/*
  details: function() {
    return 'Riker likes ' + riker.hobbies[1] + ' and ' + riker.hobbies[2] + ', is ' + riker.age + ' years\' old, and is a ' + riker.profession + '.';
  }
}

function domStuff(){
  var container = document.createElement('div');
  container.innerHTML = '<p>' + pike.hourlySales() + '</p>';

  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  //for loop transfers riker's hobbies into list elements, but not yet into the ul.
  for(var i = 0 ; i < riker.hobbies.length ; i++) {
    listArr.push('<li>' + riker.hobbies[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;

  document.body.appendChild(list);
}

domStuff();
*/
