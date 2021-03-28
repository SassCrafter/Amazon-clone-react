import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { db } from './Firebase';


function App() {
  const [ cartItems, setCartItems ] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }))
      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/pages/Cart'>
            <Cart cartItems={cartItems}/>
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
