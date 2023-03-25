import React from "react";
import Api from "../Api";
import './Login.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert('Erro!')
        }
    }

    return(
        <div className="login">
            <header><p>WhatsApp Clone</p><WhatsAppIcon fontSize="large" style={{color: '#fff'}}/></header>
            <div className="body">
                <button onClick={handleFacebookLogin}><FacebookIcon /><p>Conectar com o Facebook</p></button>
            </div>
        </div>
    )
}