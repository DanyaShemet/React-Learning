import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.usersData
}
// export const getUsersSelect = (state) => {
//     return getUsers(state).filter(el => true)
// }
export const getUsersSelect = createSelector(getUsers, (usersData) => {
    return usersData.filter(el => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getСurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getFetchState = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}