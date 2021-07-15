import React from 'react';
import './Login.css';
import Api from './../../Api';

const Login = () =>  {
    const handleFacebookLogin = async ( ) => {
        let result = await Api.fbPopup();
        if(result) {
            
        }else{ 
            alert('Erro!');
        }
    }

    return (
        <div className="login">
            <div OnClick={handleFacebookLogin} className="login--button">
                LOGAR COM O FACEBOOK
            </div>
        </div>  
    )
}

export default Login
