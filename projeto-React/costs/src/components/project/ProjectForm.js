function ProjectForm(){
    return(
        <form>
            <div><input type="text" placeholder="Insira o nome do projeto"/></div>
            <siv><input type="number" placeholder="Insira o orçamento total"/></siv>
            <div>
                <select name="category_id" id="">
                    <option disabled >Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm