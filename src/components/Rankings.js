import React, {Component} from 'react'
import { rankedUsers } from '../actions/index'

const Rankings = (props) => {
  return (
    <div>
      <li>{props.user.username} : {props.user.highest_streak} </li>
    </div>
  );
}

export default Rankings
