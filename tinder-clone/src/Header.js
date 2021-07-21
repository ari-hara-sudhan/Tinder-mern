import React from 'react'
import "./Header.css"
import { Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useHistory} from "react-router-dom"
function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {
                backButton ?(
                    <IconButton>
                         <ArrowBackIosIcon fontSize="large" onClick={()=>history.push(backButton)} />
                    </IconButton>
                   
                ):(
                    <IconButton>
                    <Avatar fontSize="large" className="header__icon"/>
                    </IconButton>
                )
            }
           
            <img className="header__logo" src="https://th.bing.com/th/id/OIP.R21N7vsa1foQvG8TXkU__QHaFG?pid=ImgDet&rs=1"  alt="tinder-logo" />
            <Link to="/chat">
            <IconButton>
            <ChatIcon fontSize="large" className="header__icon"/>
            </IconButton>   
            </Link>
        
            
        </div>
    )
}

export default Header
