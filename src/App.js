import React, { Component } from 'react';
import './App.scss';
import Header from './components/header'
import Navigation from './components/navigation'
import Content from './components/content'
import Footer from './components/footer'

class App extends Component {
  constructor() {
    super()
    this.handler = this.handler.bind(this)
  }
  state = {
      "concerns": {
        "rent": 0,
        "utilities": 0,
        "maintenance": 0,
        "guests": 0,
        "lengthOfTenancy": 0,
        "subletting": 0
      }
    }
  
  handler(update) {
    this.setState(update)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="AppGrid">
          <Navigation />
          <Content handler={this.handler} state={this.state}/>
          <Footer />
      </div>
    </div>
    );
  }
}

export default App;
