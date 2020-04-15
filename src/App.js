import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';

const App =()=> {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
  
    </Switch>
    </div>
    </Router>
  );
}

export default App;
