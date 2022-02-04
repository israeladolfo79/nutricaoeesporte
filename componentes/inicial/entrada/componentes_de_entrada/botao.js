


function botao(texto,acao){
    const PROPS_BOTAO = {
        onClick:()=>acao(),
        style:{
                width:"200px",
                height:"50px",
                color:"black"
            }
        }
    
    return React.createElement('button',PROPS_BOTAO,texto)
}

