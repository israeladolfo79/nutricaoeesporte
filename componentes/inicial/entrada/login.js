

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            erro_email:"",
            erro_senha:""
        }
    }

    limpa_erro_email(){
        this.setState({erro_email:""})
    }
    
    limpa_erro_senha(){
        this.setState({erro_senha:""})
    }

    efetua_login(){

        this.setState({
            erro_email:"erro de email",
            erro_senha:"erro senha"
    })
    }
    
    cria_quadro_login(entrada_user,entrada_senha,botao_login){
        const PROPS_QUADRO_ENTRADA = {
            className:"quadro dois-tercos-horizontais metade-vertical centralizado",
        
        }
        return  React.createElement('div',PROPS_QUADRO_ENTRADA,
        entrada_user,entrada_senha,botao_login)
    }

    cria_quadro_mae(quadro_login){
        const PROPS_QUADRO_MAE=  {
            className:"quadro metade-horizontal alinhado-a-direita "
        
        }
        return React.createElement('div',PROPS_QUADRO_MAE,quadro_login)

 
    }
    render(){
   
        const entrada_user = nome_de_usuario_ou_email(this.state.erro_email,()=>this.limpa_erro_email())
        const entrada_senha = senha(this.state.erro_senha,()=>this.limpa_erro_senha())
        const botao_login = botao(TEXTOS.botao_login,()=>this.efetua_login())
        const quadro_login  = this.cria_quadro_login(entrada_user,entrada_senha,botao_login)
        return this.cria_quadro_mae(quadro_login)
    }
 
}

