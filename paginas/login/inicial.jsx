
class Inicial  extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div   className="quadro-mae-mensagem">
                     <Mensagem></Mensagem>    
                </div>
                <div   className="quadro-mae-entrada">
                     <Entrada></Entrada>
                </div>
            </React.Fragment> 
            

        )
    }
}

ReactDOM.render(
    <Inicial></Inicial>,
    document.getElementById("root")
  );