
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [lotusvote, setlotusvote] = useState(0)
  const [rosevote, setrosevote] = useState(0)
  const [sunvote, setsunvote] = useState(0)
  const [hibiscusvote, sethibiscusvote] = useState(0)
  useEffect(() => {
    if (rosevote !== 0 || sunvote !== 0 || hibiscusvote !== 0)
      setlotusvote(lotusvote + 1);
    setrosevote(0)
    setsunvote(0)
    sethibiscusvote(0)
 
  }, [rosevote, sunvote, hibiscusvote])
  function vote(flower) {
    switch (flower) {
      case "lotus":
        setlotusvote(lotusvote + 1)
        break;
      case "rose":
        setrosevote(rosevote + 1)
        break;
      case "sunflower":
        setsunvote(sunvote + 1)
        break;
      case "hibus":
        sethibiscusvote(hibiscusvote + 1)
        break;
    }
  }
  return (
    <div className="App">
      <div className="container">
        <button onClick={() => vote("lotus")}>🌷</button>
        <button onClick={() => vote("rose")}>🌹</button>
        <button onClick={() => vote("sunflower")}>🌻</button>
        <button onClick={() => vote("hibus")}>🌺</button>
      </div>
      <div className='count'>
        <h1>{lotusvote}</h1>
        <h1>{rosevote}</h1>
        <h1>{sunvote}</h1>
        <h1>{hibiscusvote}</h1>
      </div>
    </div>
  );
}

export default App;
