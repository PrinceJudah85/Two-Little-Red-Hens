import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
