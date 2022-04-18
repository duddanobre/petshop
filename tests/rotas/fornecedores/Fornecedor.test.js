jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe forncedor', () => {
  test('o metodo validar retorno true', () => {
    const forn = new Fornecedor({
      empresa: 'gatito',
      email: 'email@email.com',
      categoria: 'brinquedos'
    })

    expect(forn.validar()).toBe(true)
  })

  test('o método criar() foi executado com sucesso', async () => {
    const forn = new Fornecedor({
      empresa: 'gatito',
      email: 'email@email.com',
      categoria: 'brinquedos'
    })

    await forn.criar()

    expect(forn.id).toBe(500)
    expect(forn.dataCriacao).toBe('10/12/2022')
    expect(forn.dataAtualizacao).toBe('28/12/2022')
    expect(forn.versao).toBe(90)
  })
})
