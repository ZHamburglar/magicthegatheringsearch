import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
    
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
