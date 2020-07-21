
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
            <p>{props.text}</p>
        </div>
    )
}