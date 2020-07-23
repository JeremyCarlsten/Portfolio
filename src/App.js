import React, {useState, useEffect} from 'react';
import './App.css';
import EventList from './components/events/event-list';
import defaultEvents from './config/static-events';
import {getEvents} from './services/githubService';

export default function App(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
      getEvents().then(githubEvents => {
          return setEvents([...defaultEvents, ...githubEvents])
      })
    }, [setEvents])

    return (
      <div className="App">
        <div id="header">
          <h1>Jeremy Carlsten</h1>
          <h3>Developer, Dad, Geek.</h3>

          <nav className="fill">
              <ul>
                  <li><a className="active" href="/">Home</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Portfolio</a></li>
              </ul>
          </nav>
      </div>
      <div className="clear"></div>
      <div className="page-wrap">
         <EventList events={events}></EventList>
      </div>

      </div>
    );
}
