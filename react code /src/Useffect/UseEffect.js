import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [count22, setCount22] = useState(3);
    const [posts, setPosts] = useState([]);
    const [comments, setComment] = useState([]);


    useEffect(() => {
    console.log("count count"); // mount

    setInterval(() => console.log("tick"), 1000); // update
    }, [count22])


    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(resp => resp.json())
    //     .then(data => {
    //       setPosts(data) // set posts in state 
    //     })
    //   }, [])




















    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setComment(data) // set posts in state 
    //     })
    //   }, [])
    
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <h1>{count22}</h1>
      <button onClick={() => setCount22(count22 + 1)}>+</button>
      <button onClick={() => setCount22(count22 - 1)}>-</button>

        <ul>
            {posts.map(post => (

            <li key={post.id}>
                <h2 className="title">{post.title}</h2>
            </li>

            ))}
        </ul>

        <ul>
            {comments.map(comment => (

            <li key={comment.id}>
                <h2 className="title">{comment.email}</h2>
                <h2 className="title">{comment.name}</h2>
                <h2 className="title">{comment.body}</h2>
                <h2 className="title">{comment.postId}</h2>

            </li>

            ))}
        </ul>
    </div>
  )
}

export default UseEffect