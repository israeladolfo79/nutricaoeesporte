


function botao(texto,acao){
    const PROPS_BOTAO = {
        onClick:()=>acao(),
        style:{
                marginTop:"3%",
                marginButton:"3%",

                width:"30%",
                height:"10%",
                backgroundColor:"#6699ff",
                borderRadios:"4%",
                textAlign:"Center",
                fontSize:"4vh",
                color:"white"
            }
        }
    
    return React.createElement('div',PROPS_BOTAO,texto)
}

