describe("Player", function() {
  var subject;

  beforeEach(function() {
    subject = new Player({player1: 150});
  });

  it("#test for user input", function() {
    expect(subject.player1).toEqual(150);
  });

  it("#test for calcylator functions", function() {
    subject.calculate_fizz();
    expect(subject.fizzMessage).toEqual("FizzBuzz");
  });
});
