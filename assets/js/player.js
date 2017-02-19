function Player(attr) {
    this.player1 = attr.player1;
    this.player2 = attr.player2;
}

  Player.prototype.calculate_fizz = function() {
    calculator = new FIZZCalculator();
      calculator.fizz_buzz(this, this);
  };
