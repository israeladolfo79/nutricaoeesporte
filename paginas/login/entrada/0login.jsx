

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


    render(){
        const nome_de_usuario = nome_de_usuario_ou_email(this.state.erro_email,()=>this.limpa_erro_email())
        const senha = senha(this.state.erro_senha,()=>this.limpa_erro_senha())
        const botao_login =botao(TEXTOS.botao_login,()=>this.efetua_login())
        const botao_cadastrar = botao(TEXTOS.cadastrar,()=>this.props.cadastrar())
        return (
            <div  className= "quadro dois-tercos-horizontais metade-vertical centralizado">
                  <h3> {TEXTOS.entre_agora} </h3>
                  {nome_de_usuario}
                  {senha}
                  {botao_login}
                  {botao_cadastrar}
            </div>
        )
  
    }
 
}

