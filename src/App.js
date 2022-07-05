import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
          <Dashboard/>
          <Switch>
            <Route path='/profile'>
              <
            </Route>
          </Switch>
    </Router>

  );
}

export default App;
