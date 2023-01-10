const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaurs

  beforeEach(function () {
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('triceratops', 'herbavore', 40);
    dinosaur_3 = new Dinosaur('velocaraptor', 'carnivore', 30);
    dinosaurs = [dinosaur_1, dinosaur_2, dinosaur_3]
    park = new Park("Dino Park", 7, dinosaurs)

  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "Dino Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 7)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function () {
    let dinosaur = new Dinosaur ("Diploducus", "herbavore", 45)
    park.addDinosaur(dinosaur)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur("triceratops")
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostVisitors()
    assert.strictEqual(actual, 50)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findSpecies("triceratops")
    assert.strictEqual(actual, 1)
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitors()
    assert.strictEqual(actual, 120)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalVisitors()
    let yearly = actual * 365
    assert.strictEqual(yearly, 43800)

  })


  it('should be able to calculate total revenue for one year', function () {
    const actual = park.totalVisitors()
    let yearly = actual * 365
    let totalRevenue = yearly * this.park.ticketPrice
    assert.strictEqual(totalRevenue, 306600)
  })

});
