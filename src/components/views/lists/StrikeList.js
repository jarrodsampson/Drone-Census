import React from 'react';

import StrikeView from '../items/StrikeView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <StrikeView strikes={props.strikes} />

    );
}