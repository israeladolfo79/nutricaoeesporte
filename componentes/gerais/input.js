

class Input extends React.Component{

    PROPS_INPUT = {
        placeholder: this.props.mensagem,
    
    }

    render(){
        console.log(this.props)

        if(this.props.tipo){
            this.PROPS_INPUT.type = this.props.tipo
        }

        const input= React.createElement('input',this.PROPS_INPUT)
        return input
    }
 
}

