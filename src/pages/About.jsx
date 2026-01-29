import { useEffect, useState } from "react";
const About = () => {

  const [users,getUsers]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then((data) => getUsers(data))
    .catch((err)=>console.log(err));
  },[]);

  if (!users){
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div>About</div>

     <div>
        <h1>Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Password: {user.password}</h4>
          </div>
        ))}
      </div>
     </> 

  )
}

export default About
