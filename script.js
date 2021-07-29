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

function fillValue() {
  // document.getElementsByClassName("box").value="X";
  // console.log(this);
  this.value="X";
}