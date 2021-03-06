
import './App.css';
import Header from "./header/Header"
import Home from "./home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./about/About"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
   
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>
        <Route exact  Link path="/">
          <About />
        </Route>
      </Switch>
    
    </Router>
      
    </div>
  );
}

export default App;
