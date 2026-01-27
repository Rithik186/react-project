import Profile from "../components/Profile"
import State from "../hooks/State"
import Parent from "../components/Parent"
import Form from "../hooks/Form"
const Home = () => {
  return (
    <>
    <Profile name="Rithik" age={19} skills={["HTML","CSS","JS","PYTHON","MONGO-DB"]}/>
      <State/>
      <Parent/>
      <Form/>
    </>
  )
}

export default Home
