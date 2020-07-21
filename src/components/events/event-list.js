import React, { Component } from 'react';
import { getEvents } from '../../services/githubService';
import { handleGithubEvent } from './GithubEventData';
import Event from './event';

import './masonry.css';
class EventList extends Component {

  componentDidMount(){
    getEvents().then(result => {
      console.log('githubservice returned: ', result);
      this.setState({eventData: [...this.state.eventData, ...result]})
    })
  }

  constructor(props){
    super(props);
    const defaultEvent = handleGithubEvent(undefined);
    defaultEvent.header = "Still a WIP";
    defaultEvent.text = "I am still working on this revamp. I have been using the previous portfolio design now since before college, it was definantly time for an update. This time around I am trying to include some updates from the things that I use so that it actually gets updated on a regular basis (automagically!). I am also toying with the idea of adding a blog, still not convinced I'll find the time to update it. ";
    defaultEvent.createdAt = new Date('3/5/2019 8:00');

    this.state = {eventData: [defaultEvent]};
  }

  render() {
    console.log(this.state.eventData)
    let events = this.state.eventData.map((it) => {
      if(!it) return;
      return <Event header={it.header} text={it.text} date={it.createdAt.toString()} key={it.id} projectName={it.project} />
    });
    return (
          <div className="masonry">
           {events}
          </div>
    );
  }
}


export default EventList;