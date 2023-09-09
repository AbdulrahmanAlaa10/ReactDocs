// import React, { useReducer } from 'react'



// const intailState = {
//     firstCounter: 0
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {firstCounter: state.firstCounter + action.value}
//         case 'decrement':
//             return {firstCounter: state.firstCounter - action.value}
//         case 'reset':
//             return intailState
//         default: return state
//     }
// }

// const Counter = () => {

//     const [count , dispatch] = useReducer(reducer, intailState);
//   return (
//     <div>
//         {count.firstCounter}
//         <button onClick={() => dispatch( {type: 'increment', value: 11}) }>increment</button>
//         <button onClick={() => dispatch( {type: 'decrement', value: 1}) }>decrement</button>
//         <button onClick={() => dispatch( {type: 'reset'}) }>reset</button>

//     </div>
//   )
// }

// export default Counter




import React, { useReducer } from 'react'



const intailState = {
    firstCounter: 0
}




const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intailState
        default: return state
    }
}





const Counter = () => {

    const [count , dispatch] = useReducer(reducer, intailState);
  return (
    <div>
        {count}
        <button onClick={() => dispatch('increment') }>increment</button>
        <button onClick={() => dispatch('decrement') }>decrement</button>
        <button onClick={() => dispatch('reset') }>reset</button>

    </div>
  )
}

export default Counter