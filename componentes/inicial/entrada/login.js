

class Login extends React.Component{
    
    constructor(props){
        super(props)
    }



    render(){
   
        const PROPS_QUADRO_ENTRADA = {
            className:"quadro dois-tercos-horizontais metade-vertical centralizado",
        
        }
        const entrada_user = nome_de_usuario_ou_email()
        const entrada_senha = senha()
        const botao_login = botao("login",null)

        const quadro_entrada = React.createElement('div',PROPS_QUADRO_ENTRADA,
        entrada_user,entrada_senha,botao_login)

        const PROPS_QUADRO_MAE=  {
            className:"quadro metade-horizontal alinhado-a-direita "
        
        }
        const quadro = React.createElement('div',PROPS_QUADRO_MAE,quadro_entrada)

 
        return quadro
    }
 
}

