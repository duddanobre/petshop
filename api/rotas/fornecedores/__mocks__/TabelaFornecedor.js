module.exports = {
  listar () {
    return []
  },
  inserir (fornecedor) {
    return {
      id: 500,
      dataCriacao: '10/12/2022',
      dataAtualizacao: '28/12/2022',
      versao: 90
    }
  },
  async pegarPorId (id) {
    return {
      id: 500,
      dataCriacao: '10/12/2022',
      dataAtualizacao: '28/12/2022',
      versao: 90
    }
  },
  async atualizar (id, dadosParaAtualizar) {
  },
  async remover (id) {
  }
}
