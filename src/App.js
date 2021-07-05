import React, {useState} from 'react';
import './App.css';
import SideBar from './component/SideBar';
// import ContentArea from './component/ContentArea';
import ChatIntro from './component/ChatIntro';
import ChatWindow from './component/ChatWindow';

function App() {
  const [ isOpenChat, setIsOpenChat] = useState();

  return (
    <div className="app-window">
      <div className="sideBar"> 
        <SideBar /> 
      </div> 
      <div className="contentArea">
        { isOpenChat !== undefined ? <ChatWindow /> : <ChatIntro />}
      </div>

    </div>
  );
}

export default App;
