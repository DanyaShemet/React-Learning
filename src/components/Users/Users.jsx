import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            this.props.setUsers(response.data.items);
        })
    }
   
    render(){
        return(
            <div>
                <div>
                    <span>1</span>
                    <span className={classes.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>

                </div>
                <div className={classes.users}>
                    {
                        this.props.usersPage.map(u => <div key={u.id} className={classes.user}> 
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.usersPhoto}/>
                            </div>
                            <div>
                                {
                                    u.followed   
                                    ? <button onClick={() => {this.props.unFollow(u.id)}}>Unfollow</button > : 
                                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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
}


export default Users