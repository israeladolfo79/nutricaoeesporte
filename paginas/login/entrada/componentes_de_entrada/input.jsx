

 function  input(id,funcao_de_limpeza,placeholder,erro_gerado,type){
    const input = <input 
                        id={id}
                        placeholder={placeholder}
                        onClick={()=> funcao_de_limpeza()}
                        type={type}
                    />   
    const erro = <p>{erro_gerado}</p>
    if (erro_gerado){
        return <div>{input}{erro}</div>
    }
    else{ 
        return <div>{input}</div>
    }  
}





function email(erro_gerado,funcao_de_limpeza){
    return input(
        id="email",
        funcao_de_limpeza,
        placeholder=TEXTOS.email,
        erro_gerado
    )
}

    
    
function nome_de_usuario_ou_email(erro_gerado,funcao_de_limpeza){
    return input(
        id="user_or_email",
        funcao_de_limpeza,
        placeholder=TEXTOS.nome_de_usuario_ou_email,
        erro_gerado
    )
}
    

function nome_de_usuario(erro_gerado,funcao_de_limpeza){
    return input(
        id="user",
        funcao_de_limpeza,
        placeholder=TEXTOS.nome_de_usuario,
        erro_gerado
    )
}
function senha(erro_gerado,funcao_de_limpeza){
    return input(
        id="senha",
        funcao_de_limpeza,
        placeholder=TEXTOS.senha,
        erro_gerado,
        type="password"
    )
}

function repetir_senha(erro_gerado,funcao_de_limpeza){
    return input(
        id="senha2",
        funcao_de_limpeza,
        placeholder=TEXTOS.repetir_senha,
        erro_gerado,
        type="password"
    )
}




