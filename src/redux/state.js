let state = {
    profilePage: {
        postData : [
            {id : 1, message:'hi, how are you?' , likesCount: 23},
            {id : 2, message:'Hello, it\'s my first Post', likesCount: 12}
        ],
    },
    messagePage: {
        dialogsData : [
            {id : 1,name:'Daniil'},
            {id : 2,name:'Andrew'},
            {id : 3, name:'Alex'},
            {id : 4, name:'Vlad'}  
        ],
        messagesData : [
            {id : 1, message:'hi'},
            {id : 2, message:'hi, hello'},
            {id : 3, message:'hi, how are you?'},
        ]
    },
    sidebar : {
        navigationData : [
            {id : 1, nav: 'Profile'},
            {id : 2, nav: 'Dialogs'},
            {id : 3, nav: 'News'},
            {id : 4, nav: 'Photo'},
            {id : 5, nav: 'Settings'},

        ]
    }
}

export default state;