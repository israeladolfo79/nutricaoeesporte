
let id_visivel_atual = "entrada_login"


function efetuar_login(){
    const texto_do_login = document.getElementById("login").value
    const texto_da_senha = document.getElementById("senha").value
    let erro_corrido = false 
    erro_corrido = torna_aviso_visivel_se_input_em_branco(texto_do_login,"aviso_login")
    erro_corrido = torna_aviso_visivel_se_input_em_branco(texto_da_senha,"aviso_senha")  
    if(erro_corrido){
        return 
    }      
    
}

async function mostra_cadastrar(){
     faz_elemento_ficar_invisivel(id_visivel_atual,delay=1,style={
        right:"10vh"
    })
    faz_elemento_ficar_visivel("entrada_cadastro",dalay=1,style={
        right:"15vh"
    })
    id_visivel_atual = "entrada_cadastro"
}

async function mostrar_login(){
    faz_elemento_ficar_invisivel(id_visivel_atual,1,style={
        right:"10vh"
    })
    faz_elemento_ficar_visivel("entrada_login",1,style={
        right:"15vh"
    })
    id_visivel_atual = "entrada_login"
}


async function inicio_login(){
    faz_elemento_ficar_visivel("entrada_login",1,style={
        top:"30vh"
    })
    faz_elemento_ficar_visivel("explicacao",1,style={
        top:"30vh"
    })
}
inicio_login()