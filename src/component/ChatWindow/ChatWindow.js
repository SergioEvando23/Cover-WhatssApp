import React, {useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './component/MessageItem'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatWindow = ( ) => {
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(true);
    const [list, setList] = useState([]);

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const handleEmojiClick = (e, emojiObject) => { 
        setText(text + emojiObject.emoji)
    };
    const handleOpenEmoji = () => {
        setIsEmojiOpen(true)
    };
    const handleCloseEmoji = () => {
        setIsEmojiOpen(false)
    };
    const handleSendClick = () => {
        
    };
    const handleMicClick = () => {
      if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript);
            }
            recognition.start();

      };
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
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                    />
                ))}
           </div>
           <div  className="chatWindow--emojiArea" style={{height: isEmojiOpen? '200px' : '0px'}}>
                <EmojiPicker 
                    disableSearchBar
                    onEmojiClick={handleEmojiClick}
                />
           </div>
           <div className="chatWindow--footer"> 
                <div className="chatWindow--leftFooter">
                    <div 
                        className="chatWindow--button"
                        onClick={handleCloseEmoji}
                        style={{width: isEmojiOpen ? 40:0}}
                    >
                        <CloseIcon style={{color: "#919191"}} />
                    </div>
                    <div 
                        className="chatWindow--button"
                        onClick={handleOpenEmoji}
                    > 
                        <InsertEmoticonIcon style={{color: isEmojiOpen ? "#009688" : "#919191"}} />
                    </div> 
                </div>
                <div className="chatWindow--inputArea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem" 
                        value={text} 
                        onChange={e => setText(e.target.value)} 
                    />
                </div>
                {text ? 
                    <div 
                        className="chatWindow--rightFooter"
                        onClick={handleSendClick}
                    >
                        <SendIcon style={{color: "#919191"}} />
                    </div> :
                    <div 
                        className="chatWindow--rightFooter"
                        onClick={handleMicClick}
                    >
                        <MicIcon style={{color: !listening ? "#00BFFF" : "#919191"}} />
                    </div>
                }
           </div>
        </div>
    )
}

export default ChatWindow
