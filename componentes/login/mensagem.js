


PROPS_MENSAGEM =  {
    className:"centro_superior",
    style:{
        position: "absolute",
        width: "50vh",
        left: "15vh",
        top:"30vh"
    }   
}

class Mensagem extends React.Component{
   
    
    render(){
        const titulo = React.createElement('h3',null,TEXTOS.tituloPreLogin)
        const texto_mensagem = React.createElement('p',null,TEXTOS.mensagemPreLogin)
        return React.createElement('div',
        PROPS_MENSAGEM,
        titulo,
        texto_mensagem
        )
        
    }
 
}

