import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Search from './pages/Search';
function App() {
  return (

      <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </>
      </Router>

    
  );
}

export default App;