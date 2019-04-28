import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>He's our number 4.</p>
        </div>
    );
};

export default userOutput;