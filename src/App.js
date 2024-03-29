import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Thanksgiving from './components/Thanksgiving';
import Cake from './components/Cake';
import Cupcake from './components/Cupcake';
import Cheesecake from './components/Cheesecake';
import Pie from './components/Pie';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

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
          <Route exact path="/"><Home /></Route>
          <Route path="/AboutUs"><AboutUs /></Route>
          <Route path="/Menu"><Menu /></Route>
          <Route path="/Thanksgiving"><Thanksgiving /></Route>
          <Route path="/Cake"><Cake /></Route>
          <Route path="/Cupcake"><Cupcake /></Route>
          <Route path="/Cheesecake"><Cheesecake /></Route>
          <Route path="/Pie"><Pie /></Route>
          <Route path="/ContactUs"><ContactUs /></Route>
          <Route path="/Home"><Home /></Route>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
