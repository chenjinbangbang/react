import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from 'react-router-dom';

import Layout from './component/layout/index.js';
//页面
import Home from './page/home/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
