import style from './Submint.module.css'

function Submint({text}){
    return(
        <div>
            <button className={StyleSheet.btn}>{text}</button>
        </div>
    )
}

export default Submint