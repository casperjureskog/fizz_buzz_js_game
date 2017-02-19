function FIZZCalculator(){
};

FIZZCalculator.prototype.fizz_buzz = function(obj) {
  var player1 = obj.player1;
  var player2 = obj.player2;

  if (player1 <= 0) {
    obj.fizzMessage = "wrong input"
  } else if (player1 % 15 === 0) {
    obj.level = player1
    obj.fizzMessage = "FizzBuzz"
  }else if (player1 % 5 === 0) {
    obj.fizzMessage = "Buzz"
  }else if (player1 % 3 === 0) {
    obj.fizzMessage = "Fizz"
  }else{
    obj.fizzMessage = "not dividible by 3 or 5"
  }




    if (player2 <= 0) {
      obj.fizzMessage2 = "wrong input"
    } else if (player2 % 15 === 0) {
      obj.level2 = player2
      obj.fizzMessage2 = "FizzBuzz"
    }else if (player2 % 5 === 0) {
      obj.fizzMessage2 = "Buzz"
    }else if (player2 % 3 === 0) {
      obj.fizzMessage2 = "Fizz"
    }else{
      obj.fizzMessage2 = "not dividible by 3 or 5"
    }

    if (typeof obj.level === "undefined" & typeof obj.level2 === "undefined"){
      obj.winner = "No one mange to fizz and buzz"
    }
    if (typeof obj.level !== "undefined" & typeof obj.level2 === "undefined") {
    obj.winner = "player 1 is the winner"
    }
    if (typeof obj.level2 !== "undefined" & typeof obj.level === "undefined") {
    obj.winner = "player 2 is the winner"
    }else if (obj.level > obj.level2) {
    obj.winner = "player 1 is the winner"
    }else if (obj.level < obj.level2){
    obj.winner = "player 2 is the winner"
    }
    if (typeof obj.level2 !== "undefined" & typeof obj.level !== "undefined" & obj.level === obj.level2){
    obj.winner = "Its a dra"
    }





};
