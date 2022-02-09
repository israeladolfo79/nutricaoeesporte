

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            entrada_atual:'login'
        }
    }

    render(){   
        var elemento_filho
        if(this.state.entrada_atual == "login"){
         
            elemento_filho = 
            <Login 
                    ir_para_cadastrar={()=> this.setState({entrada_atual:"cadastrar"}) }>
            </Login>
        }

        if(this.state.entrada_atual == "cadastrar") {
            elemento_filho = 
            <Cadastrar 
                voltar_ao_login={()=>this.setState({entrada_atual:"login"})}>  
            </Cadastrar>
            
        }

        return <div className="entrada">
            {elemento_filho}
        </div>
        
    }
 
}

