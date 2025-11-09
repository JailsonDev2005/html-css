import './App.css'

function App() {
  const name = 'jailson'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return(
    <div className="App">
      <h1>alterando jsx</h1>
      <p>Olá, {newname}</p>
      <p>soma {sum(5,10)}</p>
      <img src={url} alt="img"/>
    </div>
  )
}

export default App;
