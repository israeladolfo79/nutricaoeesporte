



class Input extends React.Component{
    
    constructor(props){
        super(props)
    }
    state = {
        erro:this.props.erro
    }

    limpa_input(){
        this.setState({erro:""})
    }


    cria_input(){

        let props_input = {
            id:this.props.id,
            onClick:()=> this.limpa_input(),

            placeholder: this.props.placeholder,
            
            style:{
                width: "50vh",
                height: "4vh",
                color: "gray",
            }
        }
              
        if(this.props.type){
            props_input.type = this.props.type
        }

        return React.createElement('input',props_input)
    }

    cria_quadro(input,erro){
        const PROPS_QUADRO = {
            style:{
                marginTop:"2vh"
            }
        }

        if(this.state.erro){
            return  React.createElement('div',PROPS_QUADRO,input,erro)
        }else{
            return  React.createElement('div',PROPS_QUADRO,input)
        }
    }

    render(){

        const input = this.cria_input()
        const erro  = React.createElement('p',null,this.props.erro)
        return this.cria_quadro(input,erro)
    }
 
}

