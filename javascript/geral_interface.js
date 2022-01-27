

function faz_elemento_ficar_invisivel(id){
    let aviso = document.getElementById(id)
    aviso.style.display = "none"
}



function faz_elemento_ficar_visivel(id){
    let aviso = document.getElementById(id)
    aviso.style.display = "inline"
}

function torna_aviso_visivel_se_input_em_branco(texto,id_do_aviso){
    if(texto== ""){
        faz_elemento_ficar_visivel(id_do_aviso)
    }
    return false
}
