
import * as React from 'react';

const Event = (props: any) => {
    let header: JSX.Element | undefined = undefined;

    if(props.header) header = <h2>{props.header}</h2>;

    return (
        <div className="item">
        {header}
        {props.text}
        </div>
    )
}

export default Event;