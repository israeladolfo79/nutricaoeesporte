

class Botao extends React.Component{

    PROPS_BOTAO = {

       onClick:()=>{
         this.props.acao()
       },
        style:{
            width:100
        }
    }

    render(){
   
        const botao = React.createElement('button',this.PROPS_BOTAO,"login")
        return botao
    }
 
}

