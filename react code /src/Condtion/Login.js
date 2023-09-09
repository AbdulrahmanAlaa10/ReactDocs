import React, { useState } from 'react'

function Login() {
      const [loggedin, setLoggedIn] = useState(true);
        
      if(loggedin) {
        return (
        <div>
            <h1>Welcome Abdulrahman alaa</h1>
        </div>
        )
    } else {
        return (
        <div>
            <h1>Welcome Guest</h1>
        </div>
        )

}
}
export default Login;











// import React, { useState } from 'react'

// function Login() {
//     const [loggedin, setLoggedIn] = useState(2);
        
//     return (
//       <div>
//         {
//           loggedin== 1? <h1>Welcome User 1</h1>
//           :loggedin == 2 ? <h1>Welcome User 2</h1>
//           :<h1>Welcome Guest</h1>
//         }
//       </div>
//     )
   
// }
// export default Login