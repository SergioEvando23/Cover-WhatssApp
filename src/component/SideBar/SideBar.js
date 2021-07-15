import React, {useState} from 'react';
import './SideBar.css';
import ChatListItem from './component/ChatList';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
// import { useChatContext } from './../../context/ChatContext';

const SideBar = ({avatar, setShow, chatList, setChatList}) => {
    const [isOpenChat, setIsOpenChat] = useState([]);

    const handleNewChat = () => {
        setShow(true);
    }

    return (
        <div>
            <header className="sideBar--header"> 
                <img className="sideBar--header--avatar" src={avatar} alt="avatar"/>
                <div className="sideBar--header--buttons">
                    <div className="header-button">
                        <SlowMotionVideoIcon style={{color: '#919191'}} />
                    </div>
                    <div onClick={handleNewChat} className="header-button">
                        <AddIcon  style={{color: '#919191'}}  />
                    </div>
                    <div className="header-button">
                        <MoreHorizIcon style={{color: '#919191'}} />
                    </div>
                </div>

            </header>
            <div className="sideBar--search">  
                <div className="search--input">
                    <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                    <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
                </div>
            </div>
            <div className="sideBar--chatList"> 
                {chatList.map((item, key) => (
                    <ChatListItem
                        key={key}
                        data={item}
                        active={isOpenChat.chatId === chatList[key].chatId}
                        onClick={() => setIsOpenChat(chatList[key])}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar;
