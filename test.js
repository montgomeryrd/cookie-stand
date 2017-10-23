'use strict';

var riker = {
  hobbies: ['drinking', 'music', 'the gym', 'learning'],
  age: 34,
  profession: 'code newbie',
  details: function() {
    return 'Riker likes ' + riker.hobbies[1] + ' and ' + riker.hobbies[2] + ', is ' + riker.age + ' years\' old, and is a ' + riker.profession + '.';
  }
};

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
