import React from 'react';
import './ChatListItem.css';

const ChatList = () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://cdn.pixabay.com/photo/2021/06/05/07/49/woman-6311910_960_720.png" alt="avatar" />
            <div className="chatListItem--lines"> 
                <div className="chatListItem--lines--row"> 
                    <div className="chatListItem--lines--row--name">
                        Amanda Barros
                    </div>
                    <div className="chatListItem--lines--row--date">
                        20:00
                    </div>
                </div>
                <div className="chatListItem--lines--row"> 
                    <div className="chatListItem--lines--row--historyMensage"> 
                        <p> oi fiote?????????? ????????????????? ?????????????? ?????????????  ??????????? </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList;
