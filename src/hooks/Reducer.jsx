import { useReducer } from "react"

const reducer=(state,action)=>{

}

const initialState={count:0}

const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>Reducer</div>
  )
}

export default Reducer
