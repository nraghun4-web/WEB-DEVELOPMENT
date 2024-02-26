import './App.css';
import Counter from './Components/Counter'
import FetchData from './Components/FetchData';
function App() {
  return (
    <div className="App">
    <Counter />
    <FetchData pageNumber={1}/>
    </div>
  );
}

export default App;
