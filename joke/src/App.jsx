import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Joke from './components/joke'
import jokeData from './components/jokeData'
import './App.css'

function App() {
  const [count, setCount] = useState(jokeData)
  
  
  const jokeElement = count.map(joke => { return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} /> })
  return (
    <>
    <div className="container">{jokeElement}</div>
      
    </>
  )
}

export default App
