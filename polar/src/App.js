import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create';
import View from './components/view';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">User Data Storage</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/create'} onClick={this.forceUpdate} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} onClick={this.forceUpdate} className="nav-link">View</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/view' component={ View } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
