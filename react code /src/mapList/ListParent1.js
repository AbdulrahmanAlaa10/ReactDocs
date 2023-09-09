// import React from 'react'
// import LIst from "./LIst"

// function ListParent1() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car) => <LIst brand={car} />)}
//         </ul>
//       </>
//     );
// }

// export default ListParent1



import React from 'react';
import LIst from './LIst';


function ListParent1() {

    const cars = [
        {id: 1, brand: 'marsides'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
      
      return (
      <>
          <h1>Who lives in my garage?</h1>
          <ul>
          {cars.map((car) => <LIst key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
}

export default ListParent1


