import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Day from "./components/Day";
import Mounth from "./components/Mounth";
import Days from "./data/days.json"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
 
  return ( 
   
    <div className="App">
      
      
      {Days.map((day) => (
        <Mounth {...day}>
          {day.days.map((oneDay) => (
            <Day {...oneDay} />
          ))}
        </Mounth>
  ))}
    </div>
  )
          }
 


export default App;
