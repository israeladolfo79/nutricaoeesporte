


function email(){
    const PROPS = {
         id:"email",
         placeholder:TEXTOS.email
    }
    return React.createElement(Input,PROPS)   
}


function nome_de_usuario_ou_email(){
    const PROPS = {
         id:"user_login",
         placeholder:TEXTOS.nome_de_usuario_ou_email
    }
    return React.createElement(Input,PROPS)   
}


function senha(num=0){
    const PROPS = {
         id:"senha"+num,
         placeholder:TEXTOS.senha,
         type:"password"
    }
    return React.createElement(Input,PROPS)   
}

