// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/profile' component={Profile}/>
      </Router>
    </div>
  );
}

export default App;
