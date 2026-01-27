import Profile from "./components/Profile"
import State from "./hooks/State"
import Parent from "./components/Parent"
import Form from "./hooks/Form"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      {/* <Profile name="Rithik" age={19} skills={["HTML","CSS","JS","PYTHON","MONGO-DB"]}/>
      <State/>
      <Parent/>
      <Form/> */}
    </>

  )
}

export default App