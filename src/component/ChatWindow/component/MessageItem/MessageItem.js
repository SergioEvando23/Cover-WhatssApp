import React from 'react';
import './MessageItem.css';

const MessageItem = ({data, user}) => {
    return ( 
        <div 
            className="messageLine"
            style={{justifyContent: user.id === data.author ? 'flex-end': 'flex-start' }}
        >
            <div 
                className="messageLine--messageItem" 
                style={{ backgroundColor: user.id === data.author ? '#DCF8C6': '#FFFFFFF'}}
            > 
                <div className="messageLine--messageText">
                    {data.body}
                </div>
                <div className="messageLine--messageDate">
                    10:00
                </div>
            </div> 
        </div>
    )
}

export default MessageItem