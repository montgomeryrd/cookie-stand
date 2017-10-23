'use strict';

var pike = {
  customerMin: 23,
  customerMax: 65,
  avg: 6.3,
  hourlyCustomers: function(){
    return Math.floor(Math.random() * (pike.customerMax - pike.customerMin)) + pike.customerMin;
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






/*
var riker = {
  hobbies: ['drinking', 'music', 'the gym', 'learning'],
  age: 34,
  profession: 'code newbie',
  details: function() {
    return 'Riker likes ' + riker.hobbies[1] + ' and ' + riker.hobbies[2] + ', is ' + riker.age + ' years\' old, and is a ' + riker.profession + '.';
  }
}

function domStuff(){
  var container = document.createElement('div');
  container.innerHTML = '<p>' + riker.details() + '</p>';

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
