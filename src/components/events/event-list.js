import React from 'react';
import Event from './event';

import './masonry.css';

function EventList(props) {
  let mappedEvents = props.events.map((it) => {
    if(!it) return undefined;
    return <Event header={it.header} text={it.text} date={it.createdAt.toString()} key={it.id} projectName={it.project} image={it.image}/>
  });

  return (
        <div className="masonry">
         {mappedEvents}
        </div>
  );
}



export default EventList;