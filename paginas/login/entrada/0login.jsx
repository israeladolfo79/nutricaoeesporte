

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
        const elemento_senha = senha(this.state.erro_senha,()=>this.limpa_erro_senha())
        return (
            <div  className= "quadro metade centralizado ">
               
                        <h3 className="texto-centralizado"> {TEXTOS.entre_agora} </h3>
                        {nome_de_usuario}
                        {elemento_senha}
                  
                  <div className="quadro centralizado-horizontalmente">
                        <div className="botao alinhado-a-esquerda"> Login</div>
                        <div className="botao alinhado-a-direita"> Cadastrar</div>
                  </div>

            </div>
        )
  
    }
 
}

