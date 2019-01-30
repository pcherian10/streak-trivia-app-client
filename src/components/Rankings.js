import React, {Component} from 'react'
import { rankedUsers } from '../actions/index'

const Rankings = (props) => {
  return (
    <div>
      {props.user.username} : {props.user.highest_streak}
    </div>
  );
}

export default Rankings
