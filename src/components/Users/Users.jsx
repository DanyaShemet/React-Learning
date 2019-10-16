import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
        })
    }
   
    render(){
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
    

        return(
            <div>
                <div className={classes.pages}>
                    {pages.map( p => {
                        return <span className={this.props.currentPage === p && classes.selectedPage } onClick={(e) =>  this.onPageChanged(p)}>{p}</span>
                    })}
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