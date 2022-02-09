

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            entrada_atual:'login'
        }
    }

    render(){   
        var elemento_filho
        switch(this.state.entrada_atual){
            case "login": 
            elemento_filho = <Login ir_para_cadastrar={()=> this.setState({entrada_atual:"cadastrar"}) }></Login>
            break
            case "cadastrar" :
            elemento_filho = <Cadastrar voltar_ao_login={()=>this.setState({entrada_atual:"login"})}>  </Cadastrar>
           
        }
        return <div className="entrada">
            {elemento_filho}
        </div>
        
    }
 
}

