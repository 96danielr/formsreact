import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"

const UsersForm = ({getUsers,userSelected,deselectUser,userDelected}) => {
    const [first_name,setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [birthday,setBirthday] = useState("")

    useEffect(()=>{
        if(userSelected !== null){
        alert("cambio movie selected")
        setFirst_name(userSelected.first_name)
        setEmail(userSelected.email)
        setLast_name(userSelected.last_name)
        setPassword(userSelected.password)
        setBirthday(userSelected.birthday)
        }

    },[userSelected])

    useEffect(() =>{
          
        if(userDelected !== null){
        const user ={

            email: userDelected.email,
            password: userDelected.password,
            first_name: userDelected.first_name,
            last_name: userDelected.last_name,
            birthday: userDelected.birthday
           
        }
        console.log(user)
        axios.delete(`https://users-crud1.herokuapp.com/users/${userDelected.id}/`,user )
                .then(()=>{
                    getUsers()
                    reset()
                    deselectUser()
                })


         }   


    },[userDelected])


    const submit = e =>{
        e.preventDefault()   
        alert("estoy enviando")
        const user ={

            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            birthday: birthday
        }

        if(userSelected !== null){
            alert("actualizando")

            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user )
                .then(()=>{
                    getUsers()
                    reset()
                    deselectUser()
                })
        }else{
            axios.post("https://users-crud1.herokuapp.com/users/",user)
            .then(()=>{
                getUsers() 
                reset()     
            
            })
            .catch(error => console.log(error.response))

            
        }

        console.log(user)
        
    }
    const reset = () =>{

        setFirst_name("")
        setEmail("")
        setLast_name("")
        setPassword("")
        setBirthday("")
          

    }

    const clear =()=>{

        reset()
        deselectUser()
    }

    return (
        <form onSubmit={submit}>
            <h2>New User</h2>
            <div className="input_container">
             <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
             <div className="name_inputs">
             <input 
                type="text"
                id='first_name' 
                value = {first_name}
                onChange ={e=> setFirst_name(e.target.value)}
                placeholder ="First name"
             
             />
              <label htmlFor="last_name"></label>
             <input 
                type="text"
                id='last_name' 
                value = {last_name}
                onChange={e => setLast_name(e.target.value)}
                placeholder ="last name"
             
             />
             </div>
            </div>   
           
            <div className="input_container">
             <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
             <input 
                type="text"
                id='email' 
                value ={email}
                onChange={e=> setEmail(e.target.value)}
                placeholder ="email"
             
             />
            </div>   
            <div className="input_container">
             <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
             <input 
                type="password"
                id='password' 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder ="password"
             
             />
            </div> 
            <div className="input_container">
             <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
             <input 
                type="date"
                id='birthday' 
                value={birthday}
                onChange={e=>setBirthday(e.target.value)}
                placeholder ="birthday"
             />

             
            </div>       
            <div className="button_container">
            <button>submit</button> 
            </div> 
            <div className="button_container">
            <button type="button" onClick={clear}>clear</button>   
            </div> 
        </form>
    );
};

export default UsersForm;