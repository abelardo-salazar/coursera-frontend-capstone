import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Layout } from './components/Layout/Layout.jsx';

import './App.css';
import { routes } from './utils/routes.jsx';

function App() {
  return (
    <React.Fragment className="App">
      <Layout>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </Layout>
    </React.Fragment>
  );
}


export default App;
