


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
        id="user",
        funcao_de_limpeza,
        placeholder=TEXTOS.nome_de_usuario_ou_email,
        erro_gerado
    )
}


function senha(erro_gerado,funcao_de_limpeza, num=0){
    return input(
        id="senha",
        funcao_de_limpeza,
        placeholder=TEXTOS.senha,
        erro_gerado,
        type="password"
    )
}

