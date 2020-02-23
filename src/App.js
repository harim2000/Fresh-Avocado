import React, {Component} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

export default class App extends Component{

  render(){
    return(
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <NavBar />
        <Switch>
          <Route path='/' component={HomePage}/>
          <Route path='/aboutUs' component={AboutUs}/>
        </Switch>
      </Router>
    );
  }

}