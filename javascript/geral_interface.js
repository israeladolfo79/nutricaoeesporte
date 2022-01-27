async function espera(delay){
    await new Promise(resolve => setTimeout(resolve, delay * 1000));

}


async function faz_elemento_ficar_invisivel(id,delay=0 ,style={}){
    let elemento = document.getElementById(id)
    elemento.style.transitionDuration = `${delay}s`

    Object.keys(style).forEach(prop=>{
        elemento.style[prop] = style[prop]
    })
  
    elemento.style.opacity = 0
    await espera( delay)
    elemento.classList.add("oculto")
}

async function faz_elemento_ficar_visivel(id,delay=0,style={}){
    let elemento = document.getElementById(id)
    elemento.classList.remove("oculto")
    elemento.style.opacity = 0

    await espera(0.05)
    Object.keys(style).forEach(prop=>{
        elemento.style[prop] = style[prop]
    })
    elemento.style.transitionDuration = `${delay}s`
    elemento.style.opacity = 1
    await espera(delay)
   
}

function torna_aviso_visivel_se_input_em_branco(texto,id_do_aviso){
    if(texto== ""){
        faz_elemento_ficar_visivel(id_do_aviso,0.25)
    }
    return false
}
