
import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header/Header';
// import ShelfHome from './components/Shelves/ShelfHome';
// import Bins from './components/Bins/Bins';
// import Inventory from './components/Inventory/Inventory';
// import Add from './components/Add/Add';
import routes from './routes.js';

//import logo into this fucker OR in a header? decide
class App extends Component {
  render() {
    return (
      <div className="App">
      
       {routes}
      </div>
    );
  }
}

export default App;
