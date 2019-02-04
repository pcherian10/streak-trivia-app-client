import React from 'react'
import { Message} from 'semantic-ui-react'

const MessageViewer = ({message}) => {

      return (
        <div>
          <Message>{message}</Message>
        </div>
      );
}

export default MessageViewer;
