import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'


const Users = (props) =>{

    let getUsers = () =>{
        if(props.usersPage.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
             //    debugger;
                props.setUsers(response.data.items);
            })
         }
    }

    
   


    return(
      
        <div className={classes.users}>
              <button onClick ={getUsers}>getUsers</button>
           {
               props.usersPage.map(u => <div key={u.id} className={classes.user}> 
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.usersPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed 
                            ? <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button > : 
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                        
                    </div> 
                </span> 
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}
export default Users