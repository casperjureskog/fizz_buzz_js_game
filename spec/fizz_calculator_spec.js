
describe("FIZZCalculator", function() {
  var calculator;
  var subject;

  beforeEach(function() {

    calculator = new FIZZCalculator();
  });

  it("test for 3 = Fizz for player1", function() {
    subject = new Player({player1: 3});
    calculator.fizz_buzz(subject);
    expect(subject.fizzMessage).toEqual("Fizz");
  });

  it("test for 5 = Buzz for player1", function() {
    subject = new Player({player1: 5});
    calculator.fizz_buzz(subject);
    expect(subject.fizzMessage).toEqual("Buzz");
  });

  it("test for 15 = FizzBuzz for player1", function() {
    subject = new Player({player1: 15});
    calculator.fizz_buzz(subject);
    expect(subject.fizzMessage).toEqual("FizzBuzz");
  });

  it("test for 15 = FizzBuzz for player2", function() {
    subject = new Player({player1: 15});
    calculator.fizz_buzz(subject);
    expect(subject.level).toEqual(15);
  });

  it("test for 15 = FizzBuzz for player2", function() {
    subject = new Player({player2: 15});
    calculator.fizz_buzz2(subject);
    expect(subject.level).toEqual(15);
  });

  it("test for numbers lower and equal 0", function() {
    subject = new Player({player1: 0});
    calculator.fizz_buzz(subject);
    expect(subject.fizzMessage).toEqual("wrong input");
  });

  it("test for numbers not divable by 3 or 5", function() {
    subject = new Player({player1: 23});
    calculator.fizz_buzz(subject);
    expect(subject.fizzMessage).toEqual("not dividible by 3 or 5");
  });

});
