import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import PhotoDetail from './Components/PhotoDetail'
import PhotoList from './Components/PhotoList'
import Nav from './Components/Nav'

class App extends Component {
  render() {
      return (
            <Router>
                <div className="App">
               <Nav /> 
              <Switch>
            <Route path ="/" exact component={HomePage}/>
            <Route path ="/photolist" exact component={PhotoList}/>
            <Route path ="/photodetail" exact component={PhotoDetail}/>
          </Switch>

          </div>
        </Router>
    );
  }
}

export default App;
