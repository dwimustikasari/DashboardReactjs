import logo from './logo.svg';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  useRouteMatch,
  useParams
}from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Profile from './Profile';

function App() {
  return (
    <Router>
          <Dashboard/>
          <Routes>
          <Route exact path='/profile' element={<Profile/>} >
            </Route>
          </Routes>
    </Router>

  );
}

export default App;
