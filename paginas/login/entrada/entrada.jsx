

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
                return <Login></Login>
            
        }
        
        
    }
 
}

