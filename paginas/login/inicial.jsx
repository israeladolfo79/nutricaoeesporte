
class Inicial  extends React.Component{
    
    render(){
        return(
            <React.Fragment>
            
                     <Mensagem></Mensagem>    
                     <Entrada></Entrada>
                
            </React.Fragment> 
            

        )
    }
}

ReactDOM.render(
    <Inicial></Inicial>,
    document.getElementById("root")
  );