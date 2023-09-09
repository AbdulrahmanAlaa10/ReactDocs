import React from 'react';
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';

// first explain

// export default function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//         return <MadeGoal/>;
//     }
//         return <MissedGoal/>;
// }


// second explain

function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
}

export default Goal;