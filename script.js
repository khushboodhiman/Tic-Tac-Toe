let X = [];
let O = [];
let count = 0;
let win = false;
let turn = whoseTurn();

setTimeout(function() {
    document.getElementById('loader').style.display='none'
  }, 3*1000);

setTimeout(function() {
    document.getElementById('start').style.opacity=1
}, 3*1000);

function startGame() {
  document.getElementById('loader-and-all').style.visibility="hidden";
  document.getElementById('game').style.visibility="visible";
}

function toggle() {
  let turns = document.getElementsByClassName('turn');
  for (turn of turns) {
    turn.classList.toggle('active');
  }
}

function fillValue(box) {
  if (!box.value) {
    let turn = whoseTurn();
    let boxRef = box.id;
    document.getElementById(boxRef).value=turn;
    (turn == "X") ? X += boxRef : O += boxRef;
    count += 1;
    console.log(X);
    console.log(O);
    isWin();
    toggle();
  }
}

function whoseTurn() {
  let turn = document.getElementsByClassName('active')[0];
  let classes = turn.classList;
  return (classes[1] == "X") ? "X" : "O" ;
}

function isWin() {
  if (count == 9)
    console.log("draw");

  else if (count > 4) {
    checkrow1();
    checkrow2();
  }
}

function declareWinner() {
  if (win) 
    console.log("won");
}

function checkrow1() {
  console.log("checking row 1");
  if (X.includes(0 & 1 & 2) || O.includes(0 & 1 & 2)) {
    win = true;
    declareWinner();
  }
}

function checkrow2() {
  console.log("checking row2");   
  if (X.includes(3 & 4 & 5) || O.includes(3 & 4 & 5)) {
    win = true;
    declareWinner();
  }
}
