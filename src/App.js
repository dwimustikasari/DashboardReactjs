import './App.css';
import BurgerBar from "./components/BurgerBar";
import Navbar from './components/Navbar';
import Dashboard from './Page/Dashboard';
import Profile from "./Page/Profile";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
