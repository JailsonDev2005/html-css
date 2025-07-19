const pokemons = []

async function fetchPokemo(){
 const randomNumber = Math.floor(Math.random() * 800)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon${randomNumber}/`)
    const data = await response.json()

    console.log(data)

    console.log(pokemons )
}

 