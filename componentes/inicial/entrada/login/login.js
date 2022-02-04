

class Login extends React.Component{
    
    constructor(props){
        super(props)
    }



    render(){
   

        const PROPS_EMAIL = {
            placeholder:TEXTOS.nome_de_usuario_ou_email,
            erro:"aaaa"
        }

        const email = React.createElement(Input,PROPS_EMAIL)

        const PROPS_SENHA = {
            placeholder:TEXTOS.senha,
            type:"password",
        }
        const senha = React.createElement(Input,PROPS_SENHA)

        const PROPS_QUADRO_ENTRADA = {
            className:"quadro dois-tercos-horizontais metade-vertical centralizado",
        
        }
        const botao_login = botao("login",null)

        const quadro_entrada = React.createElement('div',PROPS_QUADRO_ENTRADA,
        email,senha,botao_login)


        const PROPS_QUADRO_MAE=  {
            className:"quadro metade-horizontal alinhado-a-direita "
        
        }
        const quadro = React.createElement('div',PROPS_QUADRO_MAE,quadro_entrada)

 
        return quadro
    }
 
}

