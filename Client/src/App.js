import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css"
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nahai from './Components/Nahai';
import Work from './Components/Work';

const App = () => {
  return (
    <div className="App">
      <Nahai />

      <Route exact path="/"> <Home /> </Route>
      <Route path="/about" > <About /> </Route>
      <Route path="/work"> <Work /> </Route>
      <Route path="/contact"> <Contact /> </Route>

    </div>
  );
};

export default App;