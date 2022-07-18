import React from 'react';
import "../App.css"
 

const UsersList = ({ users, selectUser,userToDelete }) => {
    return (
        
            <ul className='user_list'>
                  <div className="user_list_container">
                {
                 users.map(user => (
                     <li key={user.id} className="user_container">
                        <div className="user_info">
                        <span className='name'>{user.first_name} {user.last_name}</span>
                        <span className='email'>{user.email}</span>
                        <span className='birthday'><i class="fa-solid fa-cake-candles"></i>{user.birthday}</span>
                        </div>
                        <div className="user_options">
                        <button onClick={()=>selectUser(user) }><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={()=>userToDelete(user)}><i class="fa-solid fa-trash"></i></button>
                        </div>
                        
                     
                     
                     </li>
                     ))
                }</div>
            </ul>
            
        
    );
};

export default UsersList;