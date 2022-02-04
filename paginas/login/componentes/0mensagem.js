

                            
function  cria_quadro_mensagem(titulo,texto_mensagem){
    const PROPS= {
        className:"quadro dois-tercos-horizontais metade-vertical centralizado",
       
    }
    return  React.createElement('div',PROPS,titulo,texto_mensagem)
}

function cria_quadro_mae(quadro_mensagem){
    const PROPS=  {
        className:"quadro metade-horizontal alinhado-a-esquerda",
    }
    return React.createElement('div',PROPS,quadro_mensagem)
}

function mensagem(){
    const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
    const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
    const quadro_mensagem =  cria_quadro_mensagem(titulo,texto_mensagem)
    return cria_quadro_mae(quadro_mensagem)
}




