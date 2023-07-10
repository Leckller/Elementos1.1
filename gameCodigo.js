function displayGame () {
  const local = document.querySelector('#contGame');
  const divPrincipal = document.createElement('div');
  divPrincipal.id = 'options';
  divPrincipal.className = "gameDiv"
  const newGame = document.createElement('button');
  newGame.id = 'newGameBtn';
  newGame.innerText = 'Novo Jogo';
  local.appendChild(divPrincipal);
  divPrincipal.appendChild(newGame);
};

function newGameAct () {
  const btnNewGame = document.querySelector('#newGameBtn');
  
}

window.addEventListener('load', (eve) => {
  displayGame();
})
