import React from 'react';
import './Login.css';
import Api from './../../Api';

const Login = ({onReceive}) =>  {
    const handleFacebookLogin = async ( ) => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else { 
            alert("Erro!");
        }
    }

    return (
        <div className="login">
            <button OnClick={handleFacebookLogin} className="login--button">
                LOGAR COM O FACEBOOK
            </button>
        </div>  
    )
}

export default Login
