
class Inicial  extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div   className="quadro metade-horizontal alinhado-a-esquerda ">
                     <Mensagem></Mensagem>    
                </div>
                <div   className="quadro metade-horizontal alinhado-a-direita ">
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