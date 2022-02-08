

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

        const elem_nome_de_usuario = nome_de_usuario(
            this.state.erro_nome_de_usuario,
            ()=>this.setState({nome_de_usuario_ou_email:""})
        )

        const elem_email = email(
            this.state.erro_email,
            ()=>this.setState({erro_email:""})
        )

        const elem_senha = senha(
            this.state.erro_senha,
            ()=>this.setState({erro_senha:''})
        )
        const elem_repetir_senha = repetir_senha(
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
                

        return <div  className= "quadro metade centralizado ">    
                        <h3 className="texto-centralizado"> {TEXTOS.cadastrar} </h3>
                        {elem_nome_de_usuario}
                        {elem_email}
                        {elem_senha}
                        {elem_repetir_senha}
                    <div className="quadro centralizado-horizontalmente">
                    {botao_voltar}    
                    {botao_cadastrar}
                    </div>
            </div>
        
  
    }
 
}

