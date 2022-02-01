

class Login extends React.Component{

    PROPRIEDADES ={
        style:{
            position:"absolute",
            top:"30vh",
            fontSize:"3vh"
        }   
    }
    render(){
        const mensagem = React.createElement(Mensagem,null)
        return  React.createElement('div',this.PROPRIEDADES,mensagem)
    }
}