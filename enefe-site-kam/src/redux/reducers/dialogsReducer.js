const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        const body = { message: state.newMessageBody, id: 4 };
        state.messages.push(body);
        state.newMessageBody = '';
    }
    
    return state;
}

export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}
export const sendNewMessageCreator = () => {
    return { type: SEND_MESSAGE };
}

export default dialogsReducer;