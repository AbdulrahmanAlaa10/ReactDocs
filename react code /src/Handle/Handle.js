import React from 'react'

function Handle() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    function handleSubmit2() {
        console.log('You clicked submit.');
    }


    const clickName = (e) => {
        e.preventDefault();
        console.log('I am Abdulrahman ALaa.');
    }

      
    const clickName2 = (name , e) => {
        console.log('hello' + name, e.target);
    }


  return (
    <div>
        Handle
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleSubmit2}>handleSubmit2</button>

        <button onClick={clickName}>clickName</button>
        <button onClick={(e) => clickName2("abdulrahman alaa", e)}>clickName2</button>

    </div>
  )
}

export default Handle