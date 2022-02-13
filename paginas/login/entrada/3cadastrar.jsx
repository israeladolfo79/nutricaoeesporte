

class Cadastrar extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            erro_nome_de_usuario:"",
            erro_email:"",
            erro_senha:""
        }
    }

    efetua_cadastro(){

        this.setState({
            erro_nome_de_usuario:"erro nome de usuario",
            erro_email:"erro de email",
            erro_senha:"erro senha"
        })
    }


    render(){

        const elemento_nome_de_usuario = nome_de_usuario(
            this.state.erro_nome_de_usuario,
            ()=>this.setState({erro_nome_de_usuario:""})
        )

        const elemento_email = email(
            this.state.erro_email,
            ()=>this.setState({erro_email:""})
        )

        const elemento_senha = senha(
            this.state.erro_senha,
            ()=>this.setState({erro_senha:''})
        )
        const elemento_repetir_senha = repetir_senha(
            this.state.erro_senha,
            ()=>this.setState({erro_senha:''}),
            
        )

        const botao_cadastrar = botao(
            TEXTOS.cadastrar,
            ()=>this.efetua_cadastro(),
            'esquerda'
            )
        const botao_voltar = botao(
                TEXTOS.voltar,
                ()=>this.props.voltar_ao_login(),
                'direita'
        )
                

        return <div>    
                        <h3 className="texto-centralizado"> {TEXTOS.cadastrar} </h3>
                        {elemento_nome_de_usuario}
                        {elemento_email}
                        {elemento_senha}
                        {elemento_repetir_senha}
                    <div>
                    {botao_voltar}    
                    {botao_cadastrar}
                    </div>
            </div>
        
  
    }
 
}

