import React, {useState} from 'react';
import './App.css';
import SideBar from './component/SideBar';
import ChatIntro from './component/ChatIntro';
import ChatWindow from './component/ChatWindow';
import ChatProvider from './context/ChatContext';

function App() {
  const [isOpenChat, setIsOpenChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
    name: 'Fulano'
  });

  return (
    <ChatProvider>
      <div className="app-window">
        <div className="sideBar"> 
          <SideBar avatar={user.avatar} /> 
        </div> 
        <div className="contentArea">
          { isOpenChat !== undefined ? <ChatWindow user={user} /> : <ChatIntro />}
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
