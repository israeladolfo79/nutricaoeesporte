
async function verifica_login(user){
    return await bater_na_api({
        elemento:'email_ou_nome_de_usuario',
        valor:user
    })
}



