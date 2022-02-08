

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            entrada_atual:'login'
        }
    }

    render(){   
  
        switch(this.state.entrada_atual){
            case "login": 
            return <Login ir_para_cadastrar={()=> this.setState({entrada_atual:"cadastrar"}) }></Login>
             
            case "cadastrar" :
                return  <Cadastrar voltar_ao_login={()=>this.setState({entrada_atual:"login"})}>  </Cadastrar>
           
        }
        
        
    }
 
}

