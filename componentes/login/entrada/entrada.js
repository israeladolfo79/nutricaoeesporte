

class Entrada extends React.Component{
  
    PROPS_EMAIL = {
        mensagem:TEXTOS.nome_de_usuario_ou_email
    }

    PROPS_SENHA = {
        tipo:"password"
    }
    PROPS_QUADRO_MAE=  {
        className:"metade-horizontal alinhado-a-direita "
       
    }

    PROPS_ENTRADA = {
        className:"dois-tercos-horizontais metade-vertical centralizado",
       
    }
 
    render(){
        const email = React.createElement(Input,this.PROPS_EMAIL)
        const senha = React.createElement(Input,this.PROPS_SENHA)
        const entrada = React.createElement('div',this.PROPS_ENTRADA,email,senha)
        const quadro = React.createElement('div',this.PROPS_QUADRO_MAE,entrada)
        return quadro
    }
 
}

