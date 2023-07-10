function telaDoJogo () {
  const btn = document.querySelector('#btnJogar');
  btn.addEventListener('click', (eve) => {
    eve.preventDefault();
    window.location.href = 'game.html'
  })
}

window.addEventListener('load', () => {
  telaDoJogo();
})
