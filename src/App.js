import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

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
          {/* <ContactUs /> */}
          <Route path="/About" render={() => (<About />)} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
