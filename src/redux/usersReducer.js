import { usersAPI } from '../../src/api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';



let initialState = {
    usersData : [ ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case FOLLOWING_IN_PROGRESS:{
            return{
                ...state, 
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export let follow = (userId) => {
    return{type: FOLLOW, userId}
}
export let unFollow = (userId) => {
    return{type: UNFOLLOW,userId}
}
export let setUsers = (usersData) =>{
    return {type : SET_USERS, usersData }
}
export let setCurrentPage = (currentPage) =>{
    return {type : SET_CURRENT_PAGE, currentPage }
}
export let setTotalUsersCount = (totalUsersCount) =>{
    return {type : SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}
export let toggleIsFetching = (isFetching) => {
    return {type : TOGGLE_IS_FETCHING, isFetching}
}
export let toggleFollowingProgress = (isFetching, userId) => {
    return {type: FOLLOWING_IN_PROGRESS, isFetching, userId}
}


export const getUsers = (page, pageSize) =>{
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data =>{
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const followSucces = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,  id))
        usersAPI.getFollow(id).then(response =>{
            if(response.data.resultCode == 0){
                dispatch(follow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        }) 
    }
}

export const unFollowSucces = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,  id))
        usersAPI.getUnFollow(id).then(response =>{
            if(response.data.resultCode == 0){
                dispatch(unFollow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        }) 
    }
}



export default usersReducer;
