import React, {useState, useEffect} from 'react';
import './App.css';
import EventList from './components/events/event-list';
import defaultEvents from './config/static-events';
import {getEvents} from './services/githubService';
import {merge} from 'lodash';

export default function App(){
    const [events, setEvents] = useState(defaultEvents);

    useEffect(() => {
      getEvents().then(githubEvents => {
          setEvents(sortEvents([...events, ...githubEvents]))
      })
    }, [])

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

function sortEvents(events) {
  return events
    .sort((a, b) => {
      if(!a || !b) return 0

      return a.createdAt < b.createdAt ? 1 : -1
    })
}
