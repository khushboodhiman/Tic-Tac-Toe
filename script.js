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
    toggle();
  }
}

function whoseTurn() {
  let turn = document.getElementsByClassName('active')[0];
  let classes = turn.classList;
  console.log(classes);
  return (classes[1] == "X") ? "X" : "O" ;
}
