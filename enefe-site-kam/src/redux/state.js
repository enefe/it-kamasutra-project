import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: 'Привет всем!', id: 1, likes: 14},
                {post: 'Че каво?!', id: 2, likes: 2},
            ],
            newPostText: 'Напишите что-нибудь'
        },
        dialogsPage: {
            people: [
                {name: 'Сёма', id: 1},
                {name: 'Маша', id: 2},
                {name: 'Ден', id: 3},
                {name: 'Даня', id: 4},
                {name: 'Миша', id: 5},
                {name: 'Макс', id: 6},
            ],
            messages: [
                {message: 'Привет', id: 1},
                {message: 'Как дела?', id: 2},
                {message: 'Пойдешь сегодня гулять?', id: 3},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('Change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
