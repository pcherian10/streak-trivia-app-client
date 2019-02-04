import React from 'react'
import {Message, Modal } from 'semantic-ui-react'

const MessageViewer = (props) => {
  
      return (
        <div>
          <Message>{props.message}</Message>
        </div>
      );


}

export default Message;
