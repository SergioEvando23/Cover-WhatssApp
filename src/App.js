import React, {useState} from 'react';
import './App.css';
import SideBar from './component/SideBar';
import ChatIntro from './component/ChatIntro';
import ChatWindow from './component/ChatWindow';
import ChatProvider from './context/ChatContext';
import NewChat from './component/NewChat';
import Login from './component/Login';

function App() {
  const [isOpenChat, setIsOpenChat] = useState({});
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulana Verde', image: 'https://cdn.pixabay.com/photo/2021/06/26/09/32/woman-6365735_960_720.jpg'},
    {chatId: 2, title: 'Fulana Azul', image: 'https://cdn.pixabay.com/photo/2021/06/09/07/02/extraterrestrial-6322554_960_720.jpg'},
    {chatId: 3, title: 'Fulana Laranja', image: 'https://cdn.pixabay.com/photo/2021/06/21/07/11/woman-6352829_960_720.jpg'},
    {chatId: 4, title: 'Fulana Branca', image: 'https://cdn.pixabay.com/photo/2021/06/24/12/35/woman-6361125_960_720.jpg'},
    {chatId: 5, title: 'Fulana Turbante', image: 'https://cdn.pixabay.com/photo/2021/06/17/07/05/woman-6342929_960_720.jpg'},
    {chatId: 6, title: 'Fulana Indiana', image: 'https://cdn.pixabay.com/photo/2021/06/12/07/34/woman-6330216_960_720.jpg'},
    {chatId: 7, title: 'Fulana Cibernetica', image: 'https://cdn.pixabay.com/photo/2021/06/01/06/10/woman-6300665_960_720.png'},
  ]);
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://cdn.pixabay.com/photo/2021/06/08/06/43/man-6319907_960_720.png',
    name: 'Fulano'
  });
  const [showNewChat, setShowNewChat] = useState(false)

  return (
    <ChatProvider>
        {/* <Login />  */}
      <div className="app-window">
        <NewChat 
          user={user}
          chatList={chatList}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <div className="sideBar"> 
          <SideBar avatar={user.avatar} setShow={setShowNewChat} chatList={chatList} setChatList={setChatList}  /> 
        </div> 
        <div className="contentArea">
          { isOpenChat !== undefined ? <ChatWindow user={user} /> : <ChatIntro />}
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
