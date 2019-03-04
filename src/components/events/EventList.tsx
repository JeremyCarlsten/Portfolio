import React, { Component } from 'react';
import Event from './Event';
import EventData from './EventData';

import './masonry.css'

class EventList extends Component {
  eventData: EventData[];

  constructor(props: any){
    super(props);

    this.eventData = [
      {id: 0, header: 'Booya!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 1, header: 'No Way!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '},
      {id: 2, header: 'No Way!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '},
      {id: 3, header: 'Oh yes!', text: 'Lorem ipsum'},
      {id: 4, header: 'Beez Kneez!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 5, header: 'Oh yes!', text: 'Lorem ipsum'},
      {id: 6, header: 'Booya!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 7, header: 'So Cool!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 8, header: 'So Cool!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 9, header: 'No Way!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '},
      {id: 10, header: 'So Cool!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 11, header: 'Booya!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus alias animi suscipit perspiciatis! Impedit, veritatis suscipit fuga blanditiis vero quos placeat provident debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 12, header: 'Beez Kneez!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Debitis, ab sed numquam soluta pariatur eveniet?'},
      {id: 13, header: 'Oh yes!', text: 'Lorem ipsum'},
      {id: 14, header: 'Beez Kneez!', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Debitis, ab sed numquam soluta pariatur eveniet?'},

    ]
  }

  render() {
    let events = this.eventData.map((it: EventData) => {
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