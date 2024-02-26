import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random').then(response=>{
    console.log(response.data.content)
    setQuote(response.data.content)
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
