import React from 'react';
import './App.css';
import SideBar from './component/SideBar';

function App() {
  return (
    <div className="app-window">
      <div className="sideBar"> 
        <SideBar /> 
      </div> 
      <div className="contentArea">
        ...
      </div>

    </div>
  );
}

export default App;
