import logo from './logo.svg';
import './App.css';
import Playercard from './Playercard';
import Players from './Players.js'

function App() {
    
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
    {Players.map((player, index) => (
        <Playercard key={index} Player={player} />
      ))}
     
    </div>
  )  
}

export default App;
