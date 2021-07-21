import React from 'react'
import { Avatar } from '@material-ui/core';
import "./Chat.css"
import {Link } from "react-router-dom"

function Chat({name,profile,timestamp,message}) {
    return (
        <div >
        <Link to="/chat/:person" className="chat" >
            <Avatar src={profile}/>
            <div className="chat__info">
                <h3>{name}</h3>
                <p className="small">{message}</p>


            </div>
            <p className="small">{timestamp}</p>
        </Link>
           

            
        </div>
    )
}

export default Chat
