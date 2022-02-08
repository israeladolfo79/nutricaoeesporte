

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            erro_nome_de_usuario_ou_email:"",
            erro_senha:""
        }
    }


    efetua_login(){
        this.setState({
            erro_nome_de_usuario_ou_email:"erro de email",
            erro_senha:"erro senha"
    })
    }


    render(){

        const nome_de_usuario = nome_de_usuario_ou_email(
                this.state.erro_nome_de_usuario_ou_email,
                ()=>this.setState({erro_nome_de_usuario_ou_email:""})
        )
        const elemento_senha = senha(
            this.state.erro_senha,
            ()=>this.setState({erro_senha:""})
            )

        const botao_login = botao(
            TEXTOS.botao_login,
            ()=>this.efetua_login(),
            'esquerdo'
            )

        const botao_cadastrar = botao(
            TEXTOS.cadastrar,
            ()=>this.props.ir_para_cadastrar(),
            'direita'
            )
            
        return (
            <div  className= "quadro metade centralizado ">
               
                        <h3 className="texto-centralizado"> {TEXTOS.entre_agora} </h3>
                        {nome_de_usuario}
                        {elemento_senha}
                  
                  <div className="quadro centralizado-horizontalmente">
                        {botao_login}
                        {botao_cadastrar}
                  </div>

            </div>
        )
  
    }
 
}

