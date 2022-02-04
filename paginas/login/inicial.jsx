
class Inicial  extends React.Component{
    
    render(){
        return <div className="quadro">  
                <Mensagem></Mensagem>,
                <Entrada></Entrada>
            </div>

    }
}

ReactDOM.render(
    <Inicial></Inicial>,
    document.getElementById("root")
  );