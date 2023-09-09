import React from 'react';

export default function Garage(props) {
    const cars = props.cars;

    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        || <h1>noting is here</h1>
        
        }
      </>
    );
  }
  
  