


function email(erro_gerado,funcao_de_limpeza){
    const PROPS = {
         id:"email",
         placeholder:TEXTOS.email,
         erro:erro_gerado,
         funcao_de_limpeza:funcao_de_limpeza
    }
    return React.createElement(Input,PROPS)   
}


function nome_de_usuario_ou_email(erro_gerado,funcao_de_limpeza){
    const PROPS = {
         id:"user_login",
         placeholder:TEXTOS.nome_de_usuario_ou_email,
         erro:erro_gerado,
         funcao_de_limpeza:funcao_de_limpeza
    }
    return React.createElement(Input,PROPS)   
}


function senha(erro_gerado,funcao_de_limpeza, num=0){
    const PROPS = {
         id:"senha"+num,
         placeholder:TEXTOS.senha,
         type:"password",
         erro:erro_gerado,
         funcao_de_limpeza:funcao_de_limpeza
    }
    return React.createElement(Input,PROPS)   
}

