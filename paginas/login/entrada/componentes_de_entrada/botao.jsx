

function botao(texto,funcao,lado){
    return (
        <div className={`quadro metade-horizontal alinhado-a-${lado}`}> 
        <div className="botao quadro centralizado-horizontalmente"
             onClick={()=>funcao()}>
             {texto}
        </div>
        </div>
    )
}