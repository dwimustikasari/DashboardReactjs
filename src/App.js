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
import Dashboard from './Page/Dashboard';
import Profile from './Page/Profile';

function App() {
  return (
    <Dashboard/>

  );
}

export default App;
