import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  events: any;

  getEvents(){

  }

  render() {
    return (
          <div className="masonry">
            <Event text='Some message' header='booya!'></Event>
          </div>
    );
  }
}

export default EventList;