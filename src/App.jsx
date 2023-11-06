import React from 'react';
import './App.css';
import { Header } from './components/Layout/Header/Header.jsx';
import { Nav } from './components/Layout/Nav/Nav.jsx';
import { Main } from './components/Layout/Main.jsx';
import  Footer  from './components/Layout/Footer/Footer.jsx';

function App() {
  return (
    <React.Fragment className="App">
        <Header>
        </Header>
          <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </React.Fragment>
  );
}


export default App;
