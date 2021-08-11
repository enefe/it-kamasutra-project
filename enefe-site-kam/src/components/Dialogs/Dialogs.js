import React from 'react';
import { sendNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/reducers/dialogsReducer';
import './Dialogs.css';
import Human from './Human/Human';
import Message from './Message/Message';

const Dialogs = (props) => {

  const newMessageBody = props.dialogsPage.newMessageBody;

  const onSendMessageClick = () => {
    props.dispatch(sendNewMessageCreator());
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className="dialogs">
        <div className="dialogs__people">
          { props.dialogsPage.people.map( h => <Human name={h.name} id={h.id} /> ) }
        </div>
        <div className="dialogs__messages">
          { props.dialogsPage.messages.map( m => <Message message={m.message} /> ) } 
        </div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Введите сообщение' ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick} >Отправить</button>
          </div>
        </div>
    </div>
  );
}

export default Dialogs;