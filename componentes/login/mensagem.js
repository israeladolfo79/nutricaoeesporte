

class Mensagem extends React.Component{
  


    
    
    PROPS_QUADRO_MENSAGEM = {
        className:"quadro dois-tercos-horizontais metade-vertical centralizado",
       
    }
    PROPS_QUADRO_MAE=  {
        className:"quadro metade-horizontal alinhado-a-esquerda",
    }
    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        
        const quadro_mensagem =  React.createElement('div',this.PROPS_QUADRO_MENSAGEM,
        titulo,texto_mensagem)
        const quadro_mae = React.createElement('div',this.PROPS_QUADRO_MAE,
        quadro_mensagem)
        return quadro_mae
    }
 
}

