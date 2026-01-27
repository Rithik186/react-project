import Profile from "./components/Profile"
import State from "./hooks/State"
const App = () => {
  return (
    <>
      <Profile name="Rithik" age={19} skills={["HTML","CSS","JS","PYTHON","MONGO-DB"]}/>
      <State/>
    </>

  )
}

export default App