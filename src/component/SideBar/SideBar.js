import React, {useState} from 'react';
import './SideBar.css';
import ChatListItem from './component/ChatList';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import { useChatContext } from '../../context/chatContext';

const SideBar = ( ) => {
    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Fulana Verde', image: 'https://cdn.pixabay.com/photo/2021/06/26/09/32/woman-6365735_960_720.jpg'},
        {chatId: 2, title: 'Fulana Azul', image: 'https://cdn.pixabay.com/photo/2021/06/09/07/02/extraterrestrial-6322554_960_720.jpg'},
        {chatId: 3, title: 'Fulana Laranja', image: 'https://cdn.pixabay.com/photo/2021/06/21/07/11/woman-6352829_960_720.jpg'},
        {chatId: 4, title: 'Fulana Branca', image: 'https://cdn.pixabay.com/photo/2021/06/24/12/35/woman-6361125_960_720.jpg'},
        {chatId: 5, title: 'Fulana Turbante', image: 'https://cdn.pixabay.com/photo/2021/06/17/07/05/woman-6342929_960_720.jpg'},
        {chatId: 6, title: 'Fulana Indiana', image: 'https://cdn.pixabay.com/photo/2021/06/12/07/34/woman-6330216_960_720.jpg'},
        {chatId: 7, title: 'Fulana Cibernetica', image: 'https://cdn.pixabay.com/photo/2021/06/01/06/10/woman-6300665_960_720.png'},
    ]);
    const [isOpenChat, setIsOpenChat] = useChatContext({});
    
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
