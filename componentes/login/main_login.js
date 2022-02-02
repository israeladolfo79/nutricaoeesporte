

class Login extends React.Component{
    
    PROPS_QUADRO=  {
        className:"quadro "
       
    }

    render(){
        const mensagem = React.createElement(Mensagem,null)
        const entrada = React.createElement(Entrada,null)
        return  React.createElement('div',this.PROPS_QUADRO,mensagem,entrada)
    }
}