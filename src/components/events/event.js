
import * as React from 'react';
import TimeAgo from 'react-timeago';
import './event.css';

export default function(props) {
    return (
        <div className="item">
            <div className='item-header'>
                {props.header ? <h2>{props.header}</h2> : ''}
                <TimeAgo date={props.date} /><br />
            </div>
            {props.projectName ? <p className='project-name'>Project: {props.projectName}</p> : ''}
            {createEventText(props.text)}
            {props.image ? <img className='event-image' src={'images/' + props.image} alt=""/> : undefined}
        </div>
    )
}

function createEventText(text) {
    if(text instanceof Array){
    const listItems = text.map((item, index) => <li key={index}>{item}</li>)
        return (
            <ul className="commit-list">
               {listItems}
            </ul>
        )
    }

    return <p>{text ? text.toString() : ''}</p>
}