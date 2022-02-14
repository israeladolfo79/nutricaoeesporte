

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            valor_nome_de_usuario_ou_email:"",
            valor_senha:"",
            erro_nome_de_usuario_ou_email:"",
            erro_senha:""
        }
    }

    verifica_e_seta_email(valor_email){
        
        if(valor_email == ""){
            this.setState({erro_nome_de_usuario_ou_email:ERROS.email_ou_nome_de_usuarionao_em_branco})
        }
       const resposta = verifica_login(valor_email)
        console.log(resposta)
        this.setState({valor_nome_de_usuario_ou_email:valor_email})
    }



    efetua_login(){
        this.setState({
            erro_nome_de_usuario_ou_email:"erro de email",
            erro_senha:"erro senha"

    })
    }



    render(){
        console.log(this.state)
        const elemento_nome_de_usuario = nome_de_usuario_ou_email(
                this.state.erro_nome_de_usuario_ou_email,
                ()=>this.setState({erro_nome_de_usuario_ou_email:""}),
                (valor)=>this.verifica_e_seta_email(valor)
        )
        

        const elemento_senha = senha(
            this.state.erro_senha,
            ()=>this.setState({erro_senha:""}),
            (valor)=>this.setState({senha:valor})
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
            <div>
                    <h3> {TEXTOS.entre_agora} </h3>
                    {elemento_nome_de_usuario}
                    {elemento_senha}
                    {botao_login}
                    {botao_cadastrar}
            </div>
        )
  
    }
 
}

