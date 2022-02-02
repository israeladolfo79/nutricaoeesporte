

class Botao extends React.Component{

    PROPS_BOTAO = {
        placeholder: this.props.mensagem,
        style:{
            width:100
        }
    }

    render(){
   
        const botao = React.createElement('button',null,"login")
        return botao
    }
 
}

