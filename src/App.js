import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/pages/Cart'>
            <Cart />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
