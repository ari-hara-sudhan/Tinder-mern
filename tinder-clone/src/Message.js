import React from 'react'
import "./Message.css"

function Message({username,message,id}) {

    const isUser = username===message.username;
    return (
        
        <div className={`message ${isUser && "message__user"}`}>
            <p >{message.username} {message.message}</p>
            
        </div>
    )
}

export default Message
