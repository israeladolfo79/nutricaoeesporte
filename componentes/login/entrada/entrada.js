

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
    }

    state = {
        erro_email:false,
        erro_senha:false
    }

    PROPS_EMAIL = {
        acao:()=>{
            this.setState(
                {erro_email:false,
                }
            )
        },
        mensagem:TEXTOS.nome_de_usuario_ou_email
    }
 
    PROPS_SENHA = {

        acao:()=>{
            this.setState(
                {erro_:false,
                }
            )
        },
        mensagem:TEXTOS.senha,
        tipo:"password",
    }
   
    PROPS_QUADRO_ENTRADA = {
        className:"quadro dois-tercos-horizontais metade-vertical centralizado",
       
    }
    PROPS_QUADRO_MAE=  {
        className:"quadro metade-horizontal alinhado-a-direita "
       
    }

    render(){
        console.log("chamou a render")
        this.PROPS_EMAIL.erro = this.state.erro_email
        this.PROPS_SENHA.erro = this.state.erro_senha
        const email = React.createElement(Input,this.PROPS_EMAIL)

        const senha = React.createElement(Input,this.PROPS_SENHA)
        const botao_login = React.createElement(Botao,{acao:()=>{
            this.setState(
            {erro_email:true,
             erro_senha:true
            }
        )}})

        const quadro_entrada = React.createElement('div',this.PROPS_QUADRO_ENTRADA,
        email,senha,botao_login)
        const quadro = React.createElement('div',this.PROPS_QUADRO_MAE,quadro_entrada)
        return quadro
    }
 
}

