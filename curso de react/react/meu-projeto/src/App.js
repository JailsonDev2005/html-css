import './App.css'
import HelloWorld from './components/HelloWorld';
import SaymyName from './components/SayMayName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'jailson'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return(
    <div className="App">
      <SaymyName nome="Jailson"/>
      <Pessoa nome="JJ" idade="20" profissao="DevWeb" foto="https://via.placeholder.com/150"/>

    </div>
  )
}

export default App;
