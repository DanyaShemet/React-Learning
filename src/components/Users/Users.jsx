import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'
let Users = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }    

    return (
        <div>
            <div className={classes.ыpages}>
                {pages.map( p => {
                    return <span className={props.currentPage === p && classes.selectedPage } onClick={(e) => props.onPageChanged(p)}>{p}</span>
                })}
            </div>    
            <div className={classes.users}>
                {
                    props.usersPage.map(u => <div key={u.id} className={classes.user}> 
                        <span>
                            <div>
                                <NavLink to={'/profile' + '/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.usersPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed 
                                    ? <button onClick={() =>   
                                        {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                            {
                                                withCredential: true, 
                                                // headers: 
                                            }).then(response =>{
                                                
                                                if(response.data.resultCode == 0){
                                                    props.unfollow(u.id)
                                                }
                                            }) 
                                            props.unFollow(u.id)
                                        }                                        
                                        }>Unfollow</button > 
                                    : <button onClick={() => 
                                        {
                                            axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredential: true}).then(response =>{
                                                
                                                if(response.data.resultCode == 0){
                                                    props.follow(u.id)
                                                }
                                            }) 
                                            props.follow(u.id)
                                        }
                                    }>Follow</button>
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
        </div>
       
    )
}

export default Users;