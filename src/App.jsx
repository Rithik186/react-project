import Profile from "./components/Profile"
import State from "./hooks/State"
import Parent from "./components/Parent"
const App = () => {
  return (
    <>
      <Profile name="Rithik" age={19} skills={["HTML","CSS","JS","PYTHON","MONGO-DB"]}/>
      <State/>
      <Parent/>
    </>

  )
}

export default App