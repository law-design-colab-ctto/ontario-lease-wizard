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
    <Navigation />
    <Content />
    <Footer />
    </div>
  );
}

export default App;
