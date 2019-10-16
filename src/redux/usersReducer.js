const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    usersData : [
  
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) =>{
    switch(action.type){ 
        case FOLLOW:{
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        }
           
        case UNFOLLOW:{
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId){  
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return{
                ...state, usersData: action.usersData
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state, totalUsersCount: action.count
            }
        }
        default:
            return state
    }
}

export let followActionCreator = (userId) => {
    return{type: FOLLOW, userId}
}
export let unFollowActionCreator = (userId) => {
    return{type: UNFOLLOW,userId}
}

export let setUsersActionCreator = (usersData) =>{
    return {type : SET_USERS, usersData }
}
export let setCurrentPageActionCreator = (currentPage) =>{
    return {type : SET_CURRENT_PAGE, currentPage }
}
export let setUsersTotalCountActionCreator = (totalUsersCount) =>{
    return {type : SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}



export default usersReducer;
