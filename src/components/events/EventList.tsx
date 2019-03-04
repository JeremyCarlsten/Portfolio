import React, { Component } from 'react';
import Event from './Event';
import EventData from './EventData';
import GithubService from '../../services/githubService';

import './masonry.css'

export interface State { eventData: Array<any> }


class EventList extends Component<Object, State> {

  componentDidMount(){
    console.log('hi')
    new GithubService().getEvents().then(result => {
      console.log(result); 
      this.setState({eventData: [...this.state.eventData, ...result]})
    })
  }

  constructor(props: any){
    super(props);
    
    this.state = { eventData: [{}]};
  }

  render() {
    let events = this.state.eventData.map((it: EventData) => {
      return <Event header={it.header} text={it.text} key={it.id}></Event>
    });
    return (
          <div className="masonry">
           {events}
          </div>
    );
  }
}


export default EventList;