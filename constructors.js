'use strict';

//laptops-------------------------------------------------------------
var laptops = [];

function Laptop(brand, memory, storage, gpu, processor, cores){
  this.brand = brand;
  this.memory = memory;
  this.storage = storage;
  this.gpu = gpu;
  this.processor = processor;
  this.cores = cores;
}

var lenovo = new Laptop('lenovo', '16gigs', '520SSD', '920mx', 'i8', 8);
var acer = new Laptop('acer', '32gigs', '1TB HD', 'Integrated', 'AMD', 8);
var asus = new Laptop('asus', '32gigs', '2TB HD', '980gtx', 'AMD', 8);

laptops.push(lenovo);
laptops.push(acer);
laptops.push(asus);

//bands----------------------------------------------------------------
var bands = [];

function Band(band, type, style){
  this.band = band;
  this.type = type;
  this.style = style;
}

var avenged = new Band('Avenged Sevenfold', 'Metal', 'Emo');
var staind = new Band('Staind', 'Rock', 'Emo');
var hurt = new Band('Hurt', 'Rock', 'Grunge');

bands.push(avenged);
bands.push(staind);
bands.push(hurt);

//subway sandwiches-------------------------------------------------------
var sandwiches = [];

function Subway(bread, meat, cheese, veggies, condiments, sides){
  this.bread = bread;
  this.meat = meat;
  this.cheese = cheese;
  this.veggies = veggies;
  this.condiments = condiments;
  this.sides = sides;
}

var club = new Subway('flat', [ham, turkey], 'cheddar', [onions, lettuce, tomatos], 'mayo', 'cookies');
var meatball = new Subway('oat', 'meatball', 'american', 'None', 'marinara', 'Doritos');
var chicken = new Subway('herb', 'chicken', 'cheddar', [lettuce, onions, tomatos, pepperchini], 'mayo', 'BBQ Lays');
var turkey = new Subway('cheesy', 'turkey', 'pepperjack', [lettuce, onions, tomatos, jalapenos], [guacamole, mayo], 'cookies');
var italian = new Subway('italian', [turkey, ham, pepperoni, pastrami], 'american', [lettuce, onions, tomatos], 'mayo', 'Ruffles');

sandwiches.push(club);
sandwiches.push(meatball);
sandwiches.push(chicken);
sandwiches.push(turkey);
sandwiches.push(italian);

//---------------------------------------------------------------------
