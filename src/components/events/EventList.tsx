import React, { Component } from 'react';
import Event from './Event';
import GithubService from '../../services/githubService';
import GithubEventData from './GithubEventData';

import './masonry.css';
import { defer } from 'q';

export interface State { eventData: Array<any> }


class EventList extends Component<Object, State> {

  componentDidMount(){
    GithubService.getEvents().then(result => {
      console.log('githubservice returned: ', result);
      this.setState({eventData: [...this.state.eventData, ...result]})
    })
  }

  constructor(props: any){
    super(props);
    const defaultEvent = new GithubEventData(undefined);
    defaultEvent.header = "Still a WIP";
    defaultEvent.text = "I am still working on this revamp. I have been using the previous portfolio design now since before college, it was definantly time for an update. This time around I am trying to include some updates from the things that I use so that it actually gets updated on a regular basis (automagically!). I am also toying with the idea of adding a blog, still not convinced I'll find the time to update it. ";
    defaultEvent.createdAt = new Date('3/5/2019 8:00');

    this.state = {eventData: [defaultEvent]};
  }

  render() {
    console.log(this.state.eventData)
    let events = this.state.eventData.map((it: GithubEventData) => {
      return <Event header={it.header} text={it.text} date={it.createdAt.toString()} key={it.id} projectName={it.project}></Event>
    });
    return (
          <div className="masonry">
           {events}
          </div>
    );
  }
}


export default EventList;