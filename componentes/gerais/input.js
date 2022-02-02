

class Input extends React.Component{

    PROPS_INPUT = {
        placeholder: this.props.mensagem,
    
    }
    PROPS_QUADRO = {
        style:{
            marginTop:"2vh"
        }
    }

    render(){
        console.log(this.props)

        if(this.props.tipo){
            this.PROPS_INPUT.type = this.props.tipo
        }

        const input= React.createElement('input',this.PROPS_INPUT)
        const erro  = React.createElement('p',null,'erro do email')
        const quadro = React.createElement('div',this.PROPS_QUADRO,input,erro)
        return quadro
    }
 
}

