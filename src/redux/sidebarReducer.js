let initialState = {
    navigationData : [
        {id : 1, nav: 'Profile'},
        {id : 2, nav: 'Dialogs'},
        {id : 3, nav: 'News'},
        {id : 4, nav: 'Photo'},
        {id : 5, nav: 'Settings'},
        {id : 6, nav: 'Users'},
    ]
};

const sidebarReducer = (state = initialState, action) =>{
    return state;
}

export default sidebarReducer;