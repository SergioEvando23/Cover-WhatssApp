import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatWindow = ( ) => {
    
    const hendleEmojiClick = () => { 

    };
    
    return (
        <div className="chatWindow">
           <div className="chatWindow--header"> 
                <div className="chatWindow--headerInfo">
                    <img  className="chatWindow--avatar"  src="https://cdn.pixabay.com/photo/2021/06/29/08/33/woman-6373571_960_720.png"/> 
                    <div    className="chatWindow--name">Fulana Morango</div>
                </div>

                <div className="chatWindow--headerButtons">
                    <div className="chatWindow--button">
                        <SearchIcon style={{color: "#919191"}}/> 
                    </div>
                    <div className="chatWindow--button"> 
                        <AttachFileIcon style={{color: "#919191"}}/>
                    </div>
                    <div className="chatWindow--button">
                        <MoreVertIcon style={{color: "#919191"}}/>
                    </div>
                
                </div> 

           </div>
           <div className="chatWindow--body"> 

           </div>
           <div  className="chatWindow--emojiArea">
                <EmojiPicker 
                    disableSearchBar
                    onEmojiClick={hendleEmojiClick}
                />
           </div>
           <div className="chatWindow--footer"> 
                <div className="chatWindow--leftFooter">
                    <div className="chatWindow--button">
                        <InsertEmoticonIcon style={{color: "#919191"}} />
                    </div>
                    <div className="chatWindow--button">
                        <CloseIcon style={{color: "#919191"}} />
                    </div>
                </div>
                <div className="chatWindow--inputArea">
                    <input className="chatWindow--input" type="text" placeholder="Digite uma mensagem" />
                </div>
                <div className="chatWindow--rightFooter">
                    <SendIcon style={{color: "#919191"}} />
                    
                </div>
           </div>
        </div>
    )
}

export default ChatWindow
