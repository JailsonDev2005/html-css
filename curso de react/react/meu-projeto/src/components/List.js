import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minhas Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamneto={1985}/>
                <Item marca="Fiat" ano_lancamneto={1964}/>
                <Item marca="Renault"/>
                <Item marca="chevrolet"/>
            </ul>
        </>
    )
}

export default List