import React from 'react';
import './MyInfo.css';
import background from '../../../images/background.jpg';

const MyInfo = () => {
  return (
    <div className="my-info">
      <img className="my-info__image" src={background} alt="Бэкграунд" />
      <div>
        ava + about
      </div>
    </div>

  );
}

export default MyInfo;
