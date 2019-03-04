import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <h1>Jeremy Carlsten</h1>
          <h3>Developer, Woodworker, Geek.</h3>

          <nav className="fill">
              <ul>
                  <li><a className="active" href="#">Home</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Portfolio</a></li>
              </ul>
          </nav>
      </div>
      <div className="clear"></div>
      <div className="page-wrap">
         <EventList></EventList>
      </div>

      </div>
    );
  }
}

export default App;
