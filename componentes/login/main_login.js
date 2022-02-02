

class Login extends React.Component{
    
    PROPS_QUADRO=  {
        className:"metade_horizontal  direita "
       
    }

    render(){
        const mensagem = React.createElement(Mensagem,null)
        const entrada = React.createElement(Entrada,null)
        return  React.createElement('div',null,mensagem,entrada)
    }
}