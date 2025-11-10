import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minhas Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List