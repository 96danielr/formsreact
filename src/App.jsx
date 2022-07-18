import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  
  const [users,setUsers]= useState([])
  const [userSelected,setUserSelected] = useState(null)
  const [userDelected,setUserDelected] = useState(null)

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res =>setUsers(res.data))
 

  },[])

  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res =>setUsers(res.data))
  }
 
  const selectUser = user =>{
   
    setUserSelected(user)

  } 
  const userToDelete = user =>{
    setUserDelected(user)

  }
  console.log(users)

  const deselectUser = ()=>setUserSelected(null )

  return (
    <div className="App">
      <div className="usersForm">
      <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} userDelected={userDelected}/>
      </div>
      <UsersList users={users} selectUser={selectUser} userToDelete={userToDelete}/>


    </div>
  );
}

export default App;
