

 function  input(placeholder,type,erro_gerado,funcao_de_limpeza,funcao_de_saida){
    const input = <input 
                   
                        placeholder={placeholder}
                        onClick={()=> funcao_de_limpeza()}
                        onBlur={(event)=>  funcao_de_saida(event.target.value)}
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

function nome_de_usuario_ou_email(erro_gerado,funcao_de_limpeza,funcao_de_saida){
    return input(
        TEXTOS.nome_de_usuario_ou_email,
        'text',
        erro_gerado,
        funcao_de_limpeza,
        funcao_de_saida
    )
}
    

function senha(erro_gerado,funcao_de_limpeza,funcao_de_saida){
    return input(
        TEXTOS.senha,
        'password',
        erro_gerado,
        funcao_de_limpeza,
        funcao_de_saida
    )
}




function email(erro_gerado,funcao_de_limpeza,funcao_de_saida){
    return input(
        TEXTOS.email,
        'text',
        erro_gerado,
        funcao_de_limpeza,
        funcao_de_saida
    )
}



    
    

function nome_de_usuario(erro_gerado,funcao_de_limpeza,funcao_de_saida){
    return input(
        TEXTOS.nome_de_usuario,
        'text',
        erro_gerado,
        funcao_de_limpeza,
        funcao_de_saida
    )
}
function repetir_senha(erro_gerado,funcao_de_limpeza,funcao_de_saida){
    return input(
        TEXTOS.repetir_senha,
        'password',
        erro_gerado,
        funcao_de_limpeza,
        funcao_de_saida
    )
}