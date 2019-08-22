var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  }),

  it('it should be able to add add', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);

  }),

  it('it should be able to subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  }),

  it('it should be able to multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  }),

  it('should be able to divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  }),

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(9);
    assert.equal(29, calculator.runningTotal);
  }),

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(11);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(19, calculator.runningTotal);
  }),

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick('-');
    calculator.numberClick(9);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
