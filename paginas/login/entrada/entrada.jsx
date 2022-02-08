

class Entrada extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            entrada_atual:'login'
        }
    }
    alterar_pagina(pagina){
        this.setState({entrada_atual:pagina})    
    }

    render(){

        switch(this.state.entrada_atual){

            case "login": 
                return <Login cadastrar={()=>this.alterar_pagina('cadastrar')}></Login>
            case "cadastrar" :
                return  <Cadastrar> </Cadastrar>
        }
        
        
    }
 
}

