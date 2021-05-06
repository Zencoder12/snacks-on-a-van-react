import React from 'react';

const MinusPlusButton = () => {
        return (  
            <React.Fragment>
                <button className="btn btn-outline-secondary btn-sm border border-0">-</button>
                <label for="disabledInput" className="control-label border border-secondary rounded d-inline mx-2 px-4 py-1">0</label>
                <button className="btn btn-outline-secondary btn-sm border border-0">+</button>
            </React.Fragment>
        );
    }
 
export default MinusPlusButton;