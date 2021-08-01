import React from 'react';
import { NavLink } from 'react-router-dom';
import './Human.css';

const Human = (props) => {
  return (
    <div className="human">
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default Human;