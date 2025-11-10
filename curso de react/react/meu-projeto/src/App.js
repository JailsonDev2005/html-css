import './App.css'
import HelloWorld from './components/HelloWorld';
import SaymyName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = 'jailson'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return(
    <div className="App">
      <h1>testando o CSS</h1>
      <Frase/>
      <Frase/>
      <SaymyName nome="Jailson"/>
      <Pessoa nome="JJ" idade="20" profissao="DevWeb" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  )
}

export default App;
