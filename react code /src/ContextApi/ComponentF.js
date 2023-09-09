// import React from 'react'
// import { UserContext, TypeContext } from "./App";
  
// const ComponentF = () => {
//   return (
//       <UserContext.Consumer>
//           {
//               user => {
//                   return ( 
//                       <TypeContext.Consumer>
//                           {
//                              type => {
//                                 return <div>ComponentF, my name is {user} , {type}</div>
//                              } 
//                           }

//                       </TypeContext.Consumer>

//                   ) 

//               }
//           }
//       </UserContext.Consumer>
//   )
// }

// export default ComponentF

import React, { useContext } from 'react'
import { UserContext, TypeContext } from "./App";

const ComponentF = () => {

    const user = useContext(UserContext);
    const type = useContext(TypeContext);

  return (
    <div>ComponentF, {user}, {type}</div>
  )
}

export default ComponentF