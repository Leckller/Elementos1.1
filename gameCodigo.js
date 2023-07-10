function displayGame () {
  const local = document.querySelector('#contGame');
  const divPrincipal = document.createElement('div');
  divPrincipal.id = 'options';
  const newGame = document.createElement('button');
  newGame.id = 'newGameBtn';
  newGame.innerText = 'Novo Jogo';
  local.appendChild(divPrincipal);
  divPrincipal.appendChild(newGame);
};

function interfaceJogo () {
  const divOptions = document.querySelector('#options');
  const divTela = document.createElement('div');
  const divInterface = document.createElement('div');
  divTela.className = 'grow3';
  divTela.id = 'Tela';
  divInterface.className = 'grow2';
  divInterface.id = 'Interface';
  divOptions.appendChild(divTela);
  divOptions.appendChild(divInterface);
  const TelaLocal = document.querySelector('#Tela');
  const InterfaceLocal = document.querySelector('#Interface');
  const ataque = document.createElement('button');
  const buffElementar = document.createElement('button');
  ataque.id = 'ataque';
  ataque.innerText = 'Ataque';
  buffElementar.id = 'buffElementar';
  buffElementar.innerText = 'Buff Elementar'
  InterfaceLocal.appendChild(ataque);
  InterfaceLocal.appendChild(buffElementar)
}

function enemy (level) {
  if(level === undefined) {
    throw new Error('Error 003. Level de enemy não definido')
  }
  const nivel = level;
  const multiplicador = nivel / 4;
  const enemyHp = 100 * multiplicador;
  const dano = 5 * multiplicador;
  const retorno = [nivel, enemyHp, dano]
  return retorno;
}

function fases (playerLevel) {

  try {
    if (playerLevel === undefined) {
        throw new Error('Error 001. Level não definido');
      } else if (isNaN(playerLevel)) {
        throw new Error('Error 002. Level não é um número')
      } 
  } catch (error) {
    return alert(error.message)
  }
  const local = document.querySelector('#options')
  for (let i = 0; i < playerLevel; i += 1) {
    const element = document.createElement('button')
    element.className = 'fases'
    element.innerText = `Level ${i}`
    local.appendChild(element)
    element.addEventListener('click', (e) => {
      const fases = document.querySelectorAll('.fases');
      for (let fase of fases) {
        fase.className = 'none'
      }
      interfaceJogo();
    })
  }
}

function newGameAct () {
  const btnNewGame = document.querySelector('#newGameBtn');
  btnNewGame.addEventListener('click', (eve) => {
    eve.target.style.display = 'none';
    fases(3)
  })
}

window.onload = () => {
  displayGame();
  newGameAct();
}

