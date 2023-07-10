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

module.exports = enemy;