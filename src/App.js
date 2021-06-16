
import './App.css';
import Header from "./header/Header"
import Home from "./home/Home"
import Footer from "./footer/Footer"
import About from "./about/About"
import Banner from "./banner/Banner"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
