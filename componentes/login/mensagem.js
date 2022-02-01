

class Mensagem extends React.Component{
  

    PROPRIEDADES =  {
        style:{
            position: "absolute",
            width: "50vh",
            left: "15vh",
        }   
    }
 
    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        return React.createElement('div',
        this.PROPRIEDADES,
        titulo,
        texto_mensagem
        )
        
    }
 
}

