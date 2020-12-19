let cCep = document.querySelector('#cep')
let btnBuscar = document.querySelector('.botao')



btnBuscar.addEventListener('click', Buscar)

function Buscar(e) {
  // e.preventDefault()
  let cepVal = cCep.value
  console.log(cepVal)
  BuscarCep(cepVal)
}
function BuscarCep(cep) {
  if (cep.length === 8) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
      .then(resposta => resposta.json())
      .then(resp => {
        if (!resp.cep) {
          alert('Digite novamente!')
          cCep.value = ''
        } else {
          document.querySelector('#iCep').value = resp.cep,
            document.querySelector('#logradouro').value = resp.logradouro,
            document.querySelector('#bairro').value = resp.bairro,
            document.querySelector('#cidade').value = resp.localidade,
            document.querySelector('#uf').value = resp.uf,
            document.querySelector('#d').value = resp.ddd
        }
      })
      .catch(erro => console.error('erro', erro))

  }

}
