import React, {useState} from 'react';
import './SideBar.css';
import ChatListItem from './component/ChatList';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

const SideBar = ( ) => {
    const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    return (
        <div>
            <header className="sideBar--header"> 
                <img className="sideBar--header--avatar" src="https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319908_960_720.jpg" alt="avatar"/>
                <div className="sideBar--header--buttons">
                    <div className="header-button">
                        <SlowMotionVideoIcon style={{color: '#919191'}} />
                    </div>
                    <div className="header-button">
                        <AddIcon style={{color: '#919191'}} />
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
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar;
