import React, { Component } from 'react';
import './App.scss';
import Header from './components/header'
import Navigation from './components/navigation'
import Content from './components/content'
import Footer from './components/footer'

class App extends Component {
  constructor() {
    super()
    // The handler is passed down as a prop method for children to manipulate parent state. Here, the handler is bound to App.js context.
    this.handler = this.handler.bind(this)
  }
  state = {
      "concerns": {
        "rent": 0,
        "utilities": 0,
        "maintenance": 0,
        "guests": 0,
        "lengthOfTenancy": 0,
        "subletting": 0,
        "additional": []
      }
    }
  // You pass the handler the full state to update each time. This means the child needs to call the current state as an object into a temporary variable, make changes, and then pass in the variable as the update here. See an example in pages/concerns.js:14 for what that looks like. For us, here. it just means we pass the state as a property down the component tree.
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
