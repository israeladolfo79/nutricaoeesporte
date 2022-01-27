
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


