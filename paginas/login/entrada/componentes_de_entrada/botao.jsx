

function botao(texto,funcao,lado){
    return (
         <div className="botao"
             onClick={()=>funcao()}>
             {texto}
        </div>
    )
}
