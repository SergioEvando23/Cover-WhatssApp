import React, {useState} from 'react';
import './App.css';
import SideBar from './component/SideBar';
import ChatIntro from './component/ChatIntro';
import ChatWindow from './component/ChatWindow';
import ChatProvider from './context/chatContext';

function App() {
  const [ isOpenChat, setIsOpenChat] = useState();

  return (
    <ChatProvider>
      <div className="app-window">
        <div className="sideBar"> 
          <SideBar /> 
        </div> 
        <div className="contentArea">
          { isOpenChat !== undefined ? <ChatWindow /> : <ChatIntro />}
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
