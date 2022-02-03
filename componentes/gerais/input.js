

class Input extends React.Component{

   
    props_input = {
        onClick:()=>this.props.acao(),
        placeholder: this.props.mensagem,
        
    }
    
    PROPS_QUADRO = {
        style:{
            marginTop:"2vh"
        }
    }
  
    render(){
      

        if(this.props.tipo){
            this.props_input.type = this.props.tipo
        }

        const input= React.createElement('input',this.props_input)
        const erro  = React.createElement('p',null,'erro do email')
        
        if(this.props.erro){
            return  React.createElement('div',this.PROPS_QUADRO,input,erro)
        }
        
        else{
            return  React.createElement('div',this.PROPS_QUADRO,input)
        }
     
 
    }
 
}

