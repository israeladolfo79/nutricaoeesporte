

class Mensagem extends React.Component{
  

    PROPS_QUADRO_MAE=  {
        className:"metade-horizontal alinhado-a-esquerda",
    
    }
    
    PROPS_MENSAGEM = {
        className:"dois-tercos-horizontais metade-vertical centralizado",
       
    }

    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        
        const mensagem =  React.createElement('div',this.PROPS_MENSAGEM,titulo,texto_mensagem)
        const quadro_mae = React.createElement('div',this.PROPS_QUADRO_MAE,mensagem)
        return quadro_mae
    }
 
}

