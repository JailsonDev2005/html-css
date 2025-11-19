import style from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <options>Selecione uma opção</options>
                {options.map((options) => (
                    <options value={options.id} key={options.id} >{options.name}</options>
                ))}
            </select>
        </div>
    )
}

export default Select