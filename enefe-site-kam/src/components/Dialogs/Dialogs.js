import React from 'react';
import './Dialogs.css';
import Human from './Human/Human';
import Message from './Message/Message';

const Dialogs = () => {

  let people = [
    {name: 'Сёма', id: 1},
    {name: 'Маша', id: 2},
    {name: 'Ден', id: 3},
    {name: 'Даня', id: 4},
    {name: 'Миша', id: 5},
    {name: 'Макс', id: 6},
  ]

  let messages = [
    {message: 'Привет', id: 1},
    {message: 'Как дела?', id: 2},
    {message: 'Пойдешь сегодня гулять?', id: 3},
  ]

  return (
    <div className="dialogs">
        <div className="dialogs__people">
          { people.map( h => <Human name={h.name} id={h.id} /> ) }
        </div>
        <div className="dialogs__messages">
          { messages.map( m => <Message message={m.message} /> ) }
        </div>
    </div>
  );
}

export default Dialogs;