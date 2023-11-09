import React from 'react';
import './App.css';
import { Header } from './components/Layout/Header/Header.jsx';
import { Nav } from './components/Layout/Nav/Nav.jsx';
import { Main } from './components/Layout/Main.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import Homepage from './components/pages/Homepage/Homepage.jsx';

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Nav />
      <Main>
        <Homepage />
      </Main>
      <Footer />
    </React.Fragment>
  );
}


export default App;
