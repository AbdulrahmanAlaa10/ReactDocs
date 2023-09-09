import React, { useState } from 'react'


function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const [product, setProducts] = useState({
        product1: "t-shirt",
        product2: "shose",
        product3: "trouser",
        product4: "glasses"
    });

    const updateProduct4 = () => {
        setProducts(Pstate => {
            return { ...Pstate, product4: "short" }
        })
    }
    
    const [person, setPersons] = useState([
        { name: "abdulrahman", job: "full stack" },
        { name: "ahmed", job: "front end" }, 
        { name: "khaled", job: "back end" }
    ])


    const switchNameHnaler = (newName) => {
        setPersons([
            { name: newName, job: "JavaScript stack" },
            { name: "rayan", job: "PHP" }, 
            { name: "sara", job: "back end" }
        ])
    }



    return (
        <div>

            {/* State One Examble  */}
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            {/* State One Examble  */}



            {/* State Two Examble  */}
                <h1>My favorite color is {color}!</h1>
                <button type="button" onClick={() => setColor("blue")}>Blue</button>
            {/* State Two Examble  */}



            {/* State Three Examble  */}
                <h1>{product.product1}  {product.product2} {product.product3} {product.product4} </h1>
                <button onClick={updateProduct4}>Update Product4</button> 
            {/* State Three Examble  */}



            {/* State four Examble  */}
                <button onClick={() => switchNameHnaler("mahdi")}>update</button>
            {/* State four Examble  */}
        </div>
    )
}

export default App




// 

// props (atturbite html)

// state (object js)

// condtion if else 

// loop (map)

// react router 

// create function  (hndle event )

// api (fetch)





// 