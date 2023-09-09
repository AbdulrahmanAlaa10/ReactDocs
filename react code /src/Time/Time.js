// import React, { useState } from 'react'

// function Time() {

//     const time = new Date().toLocaleTimeString();
//     const [NowTime, setNowTime] = useState(time);

//     const upadateTime = () => {
//         time = new Date.toLocaleTimeString();

//         setNowTime(time);
//     }

//     setTimeout(upadateTime, 1000);
//   return (
//     <div>
//         <h1>{NowTime}</h1>
//     </div>
//   )
// }
// export default Time






// import React, { useState } from 'react'
// import Clock from 'react-live-clock';

// function Time() {

//   return (
//     <div>
//         <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
//     </div>
//   )
// }

// export default Time



// import React, { useEffect, useState } from "react";

// function Time() {
//   const [clockState, setClockState] = useState();

//   useEffect(() => {
//     setInterval(() => {
//       const date = new Date();
//       setClockState(date.toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return <div style={{ fontSize: "55px", margin: "60px" }}>{clockState}</div>;
// }

// export default Time;




// import React, { useState } from 'react'

// function Time() {
//     const [show, setShow] = useState(true);
//   return (
//     <div className='App'>
        
//         {
//             show ? <h1>I am Abdulrahman Alaa !</h1> : null
//         }

//         <button onClick={() => setShow(true) }>true</button>
//         <button onClick={() => setShow(false) }>false</button>

//     </div>
//   )

// }

// // export default Time




// import React, { useState } from 'react'

// function Time() {
//     const [show, setShow] = useState(true);
//   return (
//     <div className='App'>

//         {
//             show ? <h1>I am Abdulrahman Alaa !</h1> : null
//         }

//         <button onClick={() => setShow(!show) }>Toggle</button>

//     </div>
//   )

// }

// export default Time