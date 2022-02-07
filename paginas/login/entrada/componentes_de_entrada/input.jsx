


function cria_elemento_input(id,funcao_de_limpeza,placeholder,type="text"){
    return <input 
        id={id}
        placeholder={placeholder}
        oncClick={()=> funcao_de_limpeza()}
        type={type}
    />   
}


 function  input(id,funcao_de_limpeza,placeholder,erro_gerado){
        const input = cria_elemento_input(id,funcao_de_limpeza,placeholder,type)
        const erro = <p>{erro_gerado}</p>
        if (erro_gerado){
            return <div className=".QuadroInput">{erro}{input}</div>
        }
        else{ 
            return <div className=".QuadroInput">{input}</div>
        }  
    }






