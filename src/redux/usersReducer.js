const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersData : [
  
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false     
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
        case TOGGLE_IS_FETCHING:{
            return{
                ...state, isFetching: action.isFetching
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
export let setIsFetchingActionCreator = (isFetching) => {
    return {type : TOGGLE_IS_FETCHING, isFetching}
}



export default usersReducer;
