import React from 'react';

const MediaComponent = () => {
    return (  
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img className="img img.fluid " src="https://i.pinimg.com/originals/08/01/ef/0801ef12c2b2a659d665659145a6296b.jpg" alt="" />
                </div>
                <div>
                    <h3>HOT CHOCOLATE</h3>
                    <p>Small</p>
                    <button className="btn btn-secondary btn-sm">REMOVE</button>
                </div>
            </div>
        </div>
    );
}
 
export default MediaComponent;