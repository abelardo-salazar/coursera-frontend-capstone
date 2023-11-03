import React from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { Nav } from './components/layout/Nav';
import { Main } from './components/layout/Main';
import { Footer } from './components/layout/Footer';

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
