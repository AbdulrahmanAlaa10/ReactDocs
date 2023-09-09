import React from 'react'

function ListCode1() {
    const persons = ["abdulrahman", "alaa", "mohamed", "alaa2"];

    return (
        <div>
            {
                persons.map((person) => <h2>{person}</h2> )
            }

        </div>
  )
}

export default ListCode1











// import React from 'react'

// function ListCode1() {
//     const names = ["abdulrahman", "alaa", "mohamed", "alaa"];


    
//     const nameList = names.map((name) => <p>{name}</p> )






//     return (
//     <div>
//         {nameList}

//     </div>

//   ) 
// }

// export default ListCode1

