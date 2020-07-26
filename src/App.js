import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { routes } from './components/pages/__init__'
import './App.css';


function App() {
  const route_keys = Object.keys(routes)
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            {/* page links */}
            <ul>
              {
                route_keys.map(
                  (key, i) => <li key={i}><Link to={routes[key].path}>{key}</Link></li>
                )
              }
            </ul>
          </nav>
        </header>
        {/* app page routes */}
        {route_keys.map(
          (key, i) => <Route exact {...routes[key]} key={i} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
  David Placca
  Codetrain Gen 14
  React - Routing
*/
