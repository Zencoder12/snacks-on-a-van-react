import React from 'react';


const RadioInput = ({prices, onChange, selectedPrice}) => {

    console.log(selectedPrice);

    return (
        <div>
             {prices.map((price) => 
             <div className="radio" key={price}>
             <input 
             className="mr-2" 
             type="radio" 
             name="prices" 
             value={price}
             onChange={(e) => onChange(e.target.value)}
             />
             <label>${price}</label>
             </div>)}
        </div>
    );
}
 
export default RadioInput;