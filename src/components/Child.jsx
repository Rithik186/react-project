const Child = ({send}) => {
    const data="This data is from Child";
  return (
    <div className="bg-violet-600 mt-5">
      <button className="text-4xl text-amber-50 hover:text-amber-200" onClick={()=> send(data)}>Send Data</button>
    </div>
  )
}
export default Child
