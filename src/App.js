import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { routes, links } from './components/pages/__init__'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            {/* page links */}
            <ul>
              {
                links.map(
                  (link, i) => <li key={i}><Link to={link.to}>{link.text}</Link></li>
                )
              }
            </ul>
          </nav>
        </header>
        {/* app page routes */}
        {
          routes.map((route, i) => <Route exact {...route} key={i} />)
        }
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
