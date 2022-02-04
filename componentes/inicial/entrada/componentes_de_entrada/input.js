


function cria_elemento_input(id,funcao_de_limpeza,placeholder,type){

    let props_input = {
        id:id,
        onClick:()=> funcao_de_limpeza(),
        placeholder: placeholder,
        style:{
            width: "50vh",
            height: "4vh",
            color: "gray",
        }
    }
            
    if(type){
        props_input.type = type
    }

    return React.createElement('input',props_input)
}


function input(id,funcao_de_limpeza,placeholder,erro_gerado,type){
    const input = cria_elemento_input(id,funcao_de_limpeza,placeholder,type)
    const erro  = React.createElement('p',null,erro_gerado)
    const PROPS_QUADRO = {
        style:{
            marginTop:"2vh"
        }
    }
    if(erro_gerado){
        return  React.createElement('div',PROPS_QUADRO,input,erro)
    }else{
        return  React.createElement('div',PROPS_QUADRO,input)
    }
}



