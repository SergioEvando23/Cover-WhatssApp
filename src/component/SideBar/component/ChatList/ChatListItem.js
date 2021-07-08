import React from 'react';
import './ChatListItem.css';

const ChatList = ({onClick, active, data}) => {

    return (
        <div 
            className={`chatListItem ${active?'active': ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt="avatar" />
            <div className="chatListItem--lines"> 
                <div className="chatListItem--lines--row"> 
                    <div className="chatListItem--lines--row--name">
                        {data.title}
                    </div>
                    <div className="chatListItem--lines--row--date">
                        20:00
                    </div>
                </div>
                <div className="chatListItem--lines--row"> 
                    <div className="chatListItem--lines--row--historyMensage"> 
                        <p> você é um DEV front-end </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList;
