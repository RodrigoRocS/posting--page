// Seletores
const form = document.querySelector('#post-form')
const titulo = document.querySelector('#titulo')
const conteudo = document.querySelector('#conteudo')
const tituloRenderizar = document.querySelector('#renderizador-titulo')
const conteudoRenderizar = document.querySelector('#renderizador-conteudo')
const idRenderizar = document.querySelector('#renderizador-id')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(data => {
      // renderização do retorno
      tituloRenderizar.innerText = data.title
      conteudoRenderizar.innerText = data.body
      idRenderizar.innerText = `Post criado com id: ${data.id}`
      form.reset()
    })
    .catch(err => {
      console.error('Erro no POST:', err)
      idRenderizar.innerText = 'Erro ao enviar o post. Veja o console.'
    })

})
