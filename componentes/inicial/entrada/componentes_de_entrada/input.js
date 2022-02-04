



class Input extends React.Component{
    
    cria_input(){

        let props_input = {
            id:this.props.id,
            onClick:()=> this.props.funcao_de_limpeza(),
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

    render(){
        const input = this.cria_input()
        const erro  = React.createElement('p',null,this.props.erro)
        const PROPS_QUADRO = {
            style:{
                marginTop:"2vh"
            }
        }
        if(this.props.erro){
            return  React.createElement('div',PROPS_QUADRO,input,erro)
        }else{
            return  React.createElement('div',PROPS_QUADRO,input)
        }
    }
 
}

