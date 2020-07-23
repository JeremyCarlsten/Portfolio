import React from 'react';
import Event from './event';
import orderBy from 'lodash/orderBy'

import './masonry.css';

function EventList(props) {
  let mappedEvents = sortEvents(props.events).map((it) => {
    if (!it) return undefined;
    return <Event header={it.header} text={it.text} date={it.createdAt.toString()} key={it.id} projectName={it.project} image={it.image} />
  });

  return (
    <div className="masonry">
      {mappedEvents}
    </div>
  );
}

function sortEvents(events) {
  const filteredEvents = events.filter(event => event !== undefined)
  return orderBy(filteredEvents, (value) => {
    return new Date(value.createdAt)
  }, ['desc']);
}

export default EventList;