

class Entrada extends React.Component{
  

    PROPS_QUADRO_MAE=  {
        className:"metade-horizontal alinhado-a-direita "
       
    }
    
    PROPS_ENTRADA = {
        className:"dois-tercos-horizontais metade-vertical centralizado",
       
    }


 
    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        const entrada = React.createElement('div',this.PROPS_ENTRADA,titulo,texto_mensagem)
        const quadro  = React.createElement('div',this.PROPS_QUADRO_MAE,entrada)
        return quadro
    }
 
}

