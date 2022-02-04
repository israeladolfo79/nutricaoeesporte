




function inicial(){
    
    PROPS=  {
        className:"quadro "
       
    }

    return  React.createElement('div',PROPS,
    mensagem(),
    React.createElement(Entrada)
    )
    
}

ReactDOM.render(
    inicial(),
    document.getElementById("root")
  );