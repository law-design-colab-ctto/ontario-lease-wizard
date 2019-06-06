import React from 'react';
import './App.scss';
import Header from './components/header'
import Navigation from './components/navigation'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppGrid">
        <Navigation />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
