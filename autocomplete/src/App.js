import './App.css';
import React, {useState} from 'react'

export default function App() {
  let array = ['atom', 'Anthony', 'Billy', 'Carol', 'Cathy', 'Kevin', 'Frank', 'Fred']
  let suggestion = []
  const [list, setList] = useState([])
  const [value, setValue] = useState('');
  const setInputValue = (e,x) =>{
    setValue(x)
  }
  function autoComplete(event){
    array.forEach((x) => {
      if (x.substring(0, event.target.value.length).toUpperCase()===event.target.value.toUpperCase()){
        suggestion.push(x) 
        setList(suggestion.map((x, index)=> {
          return (<p key={index} onClick={(e)=>setInputValue(x,e)}>{x}</p>)
        }))
    }
    if (event.target.value.length === 0){
      setList([])
    }
  })
}
  return (
    <div className='container'>
      <input className='autocomplete' onChange={(e)=>autoComplete(e)}>
      </input>
      {list}
    </div>
  );
}

