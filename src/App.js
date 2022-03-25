import './App.css';
import Self from'./Componments/Self'
import Bar from './Componments/NavBar'


function App() {
  return (
    <div className="App">
      <div className='BAR'>
        <Bar/>
      </div>
      <div className='Selfinfor'>
        <Self/>
      </div>
    </div>
  );
}

export default App;
