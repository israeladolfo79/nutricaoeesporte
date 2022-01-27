

function faz_aviso_ficar_em_branco(id){
    let aviso = document.getElementById(id)
    aviso.style.display = "none"
}

function torna_aviso_visivel_se_input_em_branco(texto,id_do_aviso){
    if(texto== ""){
        let aviso_login = document.getElementById(id_do_aviso) 
        aviso_login.style.display = "inline"
    }
    return false
}
