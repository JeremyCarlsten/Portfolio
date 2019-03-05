import React, { Component } from 'react';
import Event from './Event';
import EventData from './EventData';
import GithubService from '../../services/githubService';

import './masonry.css'

export interface State { eventData: Array<any> }


class EventList extends Component<Object, State> {

  componentDidMount(){
    new GithubService().getEvents().then(result => {
      this.setState({eventData: [...this.state.eventData, ...result]})
    })
  }

  constructor(props: any){
    super(props);
    
    this.state = { eventData: [new EventData(1, "Still a WIP", "I am still working on this revamp. I have been using the previous portfolio design now since before college, it was definantly time for an update. This time around I am trying to include some updates from the things that I use so that it actually gets updated on a regular basis (automagically!). I am also toying with the idea of adding a blog, still not convinced I'll find the time to update it. ", new Date())]};
  }

  render() {
    let events = this.state.eventData.map((it: EventData) => {
      return <Event header={it.header} text={it.text} date={it.createdAt.toString()} key={it.id}></Event>
    });
    return (
          <div className="masonry">
           {events}
          </div>
    );
  }
}


export default EventList;