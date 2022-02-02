

class Entrada extends React.Component{
  

    PROPS_QUADRO=  {
        className:"metade_horizontal  direita "
       
    }

 
    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        const entrada = React.createElement('div',null,titulo,texto_mensagem)
        const quadro  = React.createElement('div',this.PROPS_QUADRO,entrada)
        return quadro
    }
 
}

