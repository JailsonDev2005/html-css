import style from './Frase.module.css'

function Frase(){
    return(
        <div className={style.FraseContainer}>
            <p className={style.FraseContent}>este e um componente com uma frase</p>
        </div>
    )
}

export default Frase