

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
    }
    state = {
        entrada_atual:'login'
    }
     

    render(){

        var componente_de_entrada
        
        switch(this.state.entrada_atual){

            case "login": componente_de_entrada = React.createElement(Login)
            
        }
        
        return componente_de_entrada
        
    }
 
}

