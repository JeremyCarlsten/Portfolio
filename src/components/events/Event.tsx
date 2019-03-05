
import * as React from 'react';
import TimeAgo from 'react-timeago';

const Event = (props: any) => {
    let h2: JSX.Element | undefined = undefined;

    if(props.header) h2 = <h2>{props.header}</h2>;

    return (
        <div className="item">
            <div className='item-header'>
                {h2}
                <TimeAgo date={props.date}/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default Event;