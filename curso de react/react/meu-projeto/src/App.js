import './App.css'
import OutraLista from './components/outraLista'

function App(){

  const meusItems = ['React', 'Viu', "Angular"]

  return(

    <div  className='App'>
      <h1>Renderização de Lista</h1>

    <OutraLista itens={meusItems}/>
    </div>
    
  )
}

export default App