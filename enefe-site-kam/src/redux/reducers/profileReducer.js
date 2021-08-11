const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        const newPost = { post: state.newPostText, id: 2, likes: 13 };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}

export const addPostCreator = () => {
    return { type: ADD_POST };
}

export const updateNewPostTextCreator = (newPost) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: newPost };
}

export default profileReducer;