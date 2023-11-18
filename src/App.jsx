import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Layout } from './components/Layout/Layout.jsx';

import './App.css';
import { routes } from './utils/routes.jsx';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}


export default App;
