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
  const divStatus = document.createElement('div');
  divStatus.id = 'status';
  divTela.className = 'grow3';
  divTela.id = 'Tela';
  divInterface.className = 'grow2';
  divInterface.id = 'Interface';
  divOptions.appendChild(divTela);
  divOptions.appendChild(divInterface);
  const InterfaceLocal = document.querySelector('#Interface');
  const ataque = document.createElement('button');
  const buffElementar = document.createElement('button');
  const divAtaques = document.createElement('div');
  divAtaques.id = 'opAtaques'
  ataque.id = 'ataque';
  ataque.innerText = 'Ataque';
  ataque.className = 'int'
  buffElementar.id = 'buffElementar';
  buffElementar.innerText = 'Buff Elementar'
  buffElementar.className = 'int'
  InterfaceLocal.appendChild(divAtaques)
  const divAtaquesLocal = document.querySelector('#opAtaques');
  divAtaquesLocal.appendChild(ataque);
  divAtaquesLocal.appendChild(buffElementar)
  InterfaceLocal.appendChild(divStatus)
  const divStatusLocal = document.querySelector('#status');
  const imgPersonagem = document.createElement('img');
  imgPersonagem.className = 'personagem'
  imgPersonagem.src = './personagens/terraputo.png'
  const hp = document.createElement('h3');
  hp.id = 'hpPersonagem';
  hp.innerText = 'Hp: 100';
  const energia = document.createElement('h3');
  energia.id = 'energiaPersonagem';
  energia.innerText = 'Energia: 100';
  divStatusLocal.appendChild(hp)
  divStatusLocal.appendChild(energia)
  divStatusLocal.appendChild(imgPersonagem)
}



function telaGame () {
  const TelaLocal = document.querySelector('#Tela');
  const ceu = document.createElement('div');
  const sobreTerra = document.createElement('div');
  const terra = document.createElement('img');
  
  ceu.id = 'ceuGame';
  ceu.className = 'grow'
  sobreTerra.id = 'sobreTerraGame';
  sobreTerra.className = 'grow'
  terra.id = 'terraGame';
  terra.className = 'grow'
  
  ceu.style.backgroundImage = "url('ceu.png')"
  sobreTerra.style.backgroundImage = "url('sobreterra.png')"
  terra.style.backgroundImage = "url('terra.png')"

  TelaLocal.appendChild(ceu);
  TelaLocal.appendChild(sobreTerra);
  TelaLocal.appendChild(terra);

}

function enemy (level) {
  if(level === undefined) {
    throw new Error('Error 003. Level de enemy não definido')
  }
  if (level === '0' || level === 0) {
    return [0, 15, 1]
  }
  const nivel = level;
  const multiplicador = nivel / 4;
  const enemyHp = 100 * multiplicador;
  const dano = 5 * multiplicador;
  const retorno = [nivel, enemyHp, dano]
  return retorno;
}

let faseClicked = undefined;

function adicionaEnemy (statusEnemy) {
  const ceuLocal = document.querySelector('#ceuGame');
  const sobreTerraLocal = document.querySelector('#sobreTerraGame');

  const inimigo = document.createElement('img');
  const inimigo2 = document.createElement('img');

  inimigo.src = 'inimigoOlho.png';
  inimigo.id = 'enemyEye';
  inimigo.className = 'enemy';

  inimigo2.src = 'inimigoOlho.png';
  inimigo2.id = 'enemyEye2';
  inimigo2.className = 'enemy';
  
  inimigo.addEventListener('click', (eve) => {
    const enemyLocal = document.querySelector('.selected')
    if (enemyLocal) {
      enemyLocal.classList.remove('selected')
      eve.target.classList.add('selected')
    }
    eve.target.classList.add('selected')
  })
  
  inimigo2.addEventListener('click', (eve) => {
    const enemyLocal = document.querySelector('.selected')
    if (enemyLocal) {
      enemyLocal.classList.remove('selected')
      eve.target.classList.add('selected')
    }
    eve.target.classList.add('selected')
  })

  ceuLocal.appendChild(inimigo)
  sobreTerraLocal.appendChild(inimigo2)
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
      faseClicked = e.target.innerText[6]
      console.log(e.target.innerText)
      for (let fase of fases) {
        fase.className = 'none'
      }
      interfaceJogo();
      telaGame();
      adicionaEnemy(enemy(faseClicked))
    })
  }
}

function newGameAct () {
  const btnNewGame = document.querySelector('#newGameBtn');
  btnNewGame.addEventListener('click', (eve) => {
    eve.target.style.display = 'none';
    fases(30)
  })
}


window.onload = () => {
  displayGame();
  newGameAct();
}
