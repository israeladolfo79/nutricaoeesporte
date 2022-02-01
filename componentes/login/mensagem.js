


function cria_mensagem(){
    const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
    const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
    const  mensagem = React.createElement('div',null,titulo,texto_mensagem)
    return mensagem
}

