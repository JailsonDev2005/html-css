function outraLista({itens}){

    return(
        <>
            <h3>Lista de coisas boas:</h3>

            {
                itens.map((item, index)=>(
                    <p key={index} >{item}</p>
                ))
            }
        </>
    )

}

export default outraLista