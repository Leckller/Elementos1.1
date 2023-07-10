const enemy = require('./enemy');

describe('Teste enemy', () => {
  test('Testa se enemy retorna um vetor contendo 3 itens', () => {
    expect(enemy(1)).toEqual([1, 25, 1.25])
  })
  test('Testa se retorna 3 itens', () => {
    expect(enemy(1).length).toBe(3)
  })
  test('Testa se captura um erro ao deixar o parametro como undefined', () => {
    expect(() => enemy()).toThrow()
  })
})
