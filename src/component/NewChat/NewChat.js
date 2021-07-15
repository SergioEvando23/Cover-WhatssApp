import React, {useState} from 'react';
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({user, chatList, show, setShow}) => {
    const [ list, setList ] = useState([
        {
            id: 123,
            avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
            name: 'fulaninho',
        }, 
        {
            id: 124,
            avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
            name: 'fulaninho',
        }, 
        {
            id: 125,
            avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
            name: 'fulaninho',
        }, 
        {
            id: 126,
            avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
            name: 'fulaninho',
        }, 
    ]);
    const hendleClose = ( ) => {
        setShow(false)
    }

    return (
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div 
                    className="newChat--backButton"
                    onClick={hendleClose}
                >
                    <ArrowBackIcon />
                </div> 
                <div className="newChat--headTitle">
                    Nova Conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}> 
                        <img className="newChat--itemAvatar" src={item.avatar} alt="avatar" />
                        <div className="newChat--itemName">
                            {item.name}
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default NewChat
