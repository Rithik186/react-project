import { useState } from "react"
import { useEffect } from "react"

const State = () => {
    const [count,setCount]=useState(0)
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)

    useEffect(()=>{
        console.log("from use effect")
    },[like])

    return(
    <>
        <div className="mt-10 bg-blue-400 space-x-10">
            <h1 className="font-bold text-4xl mb-5">Count: {count}</h1>
            <button className="mb-5 bg-amber-50 text-2xl rounded m-4 p-2 hover:bg-amber-200" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="mb-5 bg-amber-50 text-2xl rounded m-4 p-2 hover:bg-amber-200" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

        <div  className="mt-10 bg-red-300 space-x-10">
            <h1 className="font-bold text-2xl mb-4">Like Dislike Section</h1>
            <h1 className="font-bold text-2xl space-x-5">Likes: {like} Dislike: {dislike}</h1>
            <button className="mb-5 bg-amber-50 text-2xl rounded m-4 p-2 hover:bg-pink-600" onClick={()=> setLike(like+1)}>Like 👍</button>
            <button className="mb-5 bg-amber-50 text-2xl rounded m-4 p-2 hover:bg-pink-600" onClick={()=> setDislike(dislike+1)}>Dislike 👎</button>
        </div>
    </>
    )
}
export default State
