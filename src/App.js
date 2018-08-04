import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Trend from './containers/Trend/Trend';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/trend" component={Trend} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
