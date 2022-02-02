

class Entrada extends React.Component{
  
    PROPS_EMAIL = {
        mensagem:TEXTOS.nome_de_usuario_ou_email
    }

    PROPS_SENHA = {
        mensagem:TEXTOS.senha,
        tipo:"password"
    }

    PROPS_QUADRO_ENTRADA = {
        className:"quadro dois-tercos-horizontais metade-vertical centralizado",
       
    }
    PROPS_QUADRO_MAE=  {
        className:"quadro metade-horizontal alinhado-a-direita "
       
    }


 
    render(){
        const email = React.createElement(Input,this.PROPS_EMAIL)
        const senha = React.createElement(Input,this.PROPS_SENHA)
        const botao_login = React.createElement(Botao)
        const quadro_entrada = React.createElement('div',this.PROPS_QUADRO_ENTRADA,
        email,senha,botao_login)
        const quadro = React.createElement('div',this.PROPS_QUADRO_MAE,quadro_entrada)
        return quadro
    }
 
}

