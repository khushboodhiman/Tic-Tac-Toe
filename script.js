let X = [];
let O = [];
let win = false;
let count = 0;
let turn = whoseTurn();

setTimeout(function() {
    document.querySelector('.loader-container').style.display='none';
    document.querySelector('.game').style.display='block';
  }, 3*1000);

function startGame() {
  document.querySelector('.loader-container').style.visibility="hidden";
  document.querySelector('.game').style.visibility="visible";
}

function toggle() {
  let turns = document.querySelectorAll('.turn');
  for (turn of turns) {
    turn.classList.toggle('active');
  }
}

function fillValue(box) {
  if (!box.value) {
    let turn = whoseTurn();
    let boxRef = box.id;
    document.getElementById(boxRef).value=turn;
    (turn == "X") ? X.push(boxRef) : O.push(boxRef);
    count += 1;
    // console.log("X", X);
    // console.log("O", O);
    isWin();
    toggle();
  }
}

function whoseTurn() {
  let turn = document.querySelector('.active');
  let classes = turn.classList;
  return (classes[1] == "X") ? "X" : "O" ;
}

function isWin() {
  if (count == 9){
    displayMessage("Draw");
  }

  else if (count > 4) {
    if (!win) {
      let XRow1 = X.filter(el => el == 0 || el == 1 || el == 2);
      if (XRow1.length == 3) {
        displayMessage("Won");
      }

      let ORow1 = O.filter(el => el == 0 || el == 1 || el == 2);
      if (ORow1.length == 3) {
        displayMessage("Won");
      }

      let XRow2 = X.filter(el => el == 3 || el == 4 || el == 5);
      if (XRow2.length == 3) {
        displayMessage("Won");
      }

      let ORow2 = O.filter(el => el == 3 || el == 4 || el == 5);
      if (ORow2.length == 3) {
        displayMessage("Won");
      }

      let XRow3 = X.filter(el => el == 6 || el == 7 || el == 8);
      if (XRow3.length == 3) {
        displayMessage("Won");
      }

      let ORow3 = O.filter(el => el == 6 || el == 7 || el == 8);
      if (ORow3.length == 3) {
        displayMessage("Won");
      }

      let XCol1 = X.filter(el => el == 0 || el == 3 || el == 6);
      if (XCol1.length == 3) {
        displayMessage("Won");
      }

      let OCol1 = O.filter(el => el == 0 || el == 3 || el == 6);
      if (OCol1.length == 3) {
        displayMessage("Won");
      }

      let XCol2 = X.filter(el => el == 1 || el == 4 || el == 7);
      if (XCol2.length == 3) {
        displayMessage("Won");
      }

      let OCol2 = O.filter(el => el == 1 || el == 4 || el == 7);
      if (OCol2.length == 3) {
        displayMessage("Won");
      }

      let XCol3 = X.filter(el => el == 2 || el == 5 || el == 8);
      if (XCol3.length == 3) {
        displayMessage("Won");
      }

      let OCol3 = O.filter(el => el == 2 || el == 5 || el == 8);
      if (OCol3.length == 3) {
        displayMessage("Won");
      }

      let XDiag1 = X.filter(el => el == 0 || el == 4 || el == 8);
      if (XDiag1.length == 3) {
        displayMessage("Won");
      }

      let ODiag1 = O.filter(el => el == 0 || el == 4 || el == 8);
      if (ODiag1.length == 3) {
        displayMessage("Won");
      }

      let XDiag2 = X.filter(el => el == 2 || el == 4 || el == 6);
      if (XDiag2.length == 3) {
        displayMessage("Won");
      }

      let ODiag2 = O.filter(el => el == 2 || el == 4 || el == 6);
      if (ODiag2.length == 3) {
        displayMessage("Won");
      }
    }
  }
}

function displayMessage(drawOrWin) {
  console.log(drawOrWin);
  if(drawOrWin) {
    document.querySelector('.game').style.display = "none";
    document.querySelector('.display-msg').style.display = "block";
    if (drawOrWin == "Won") document.querySelector('.winner').innerHTML = whoseTurn();
    document.querySelector('.message').innerHTML = drawOrWin;
  }
}

function restart() {
  X = [];
  O = [];
  count = 0;
  document.querySelector('.display-msg').style.display = "none";
  document.querySelector('.game').style.display = "block";
  let boxes = document.querySelectorAll('.box');
  console.log(boxes);
  boxes.forEach(element => {
    element.value = "";
  });
  // [...boxes].forEach(element => {
  //   element.value="";
  // });
  // for (box in boxes) 
  //   box.value = "";
}
