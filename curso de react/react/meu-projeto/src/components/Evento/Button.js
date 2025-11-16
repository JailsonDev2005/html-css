import buttom from './evento/Buttom'

function Buttom(props){
    return(
        <div>
            <button onClick={props.event}>{props.text}</button>
        </div>
    )
}

export default Buttom