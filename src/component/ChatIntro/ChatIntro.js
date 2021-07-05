import React from 'react';
import './ChatIntro.css';

import ChatIntroIMG from './../../assets/ChatIntroIMG.png'

const ChatIntro = ( ) => {
    return (
        <div className="chatIntro">
            <img src={ChatIntroIMG} alt="instruction" />
            <h1> Mantenha seu celular conectado </h1>
            <h2> O WhatsApp Web conecta ao seu telefone para sincronizar suas mensagens. Para diminuir o uso de seu plano de intenet, conecte seu telefone a uma rede WiFi. </h2>
        </div>
    )
}

export default ChatIntro;
