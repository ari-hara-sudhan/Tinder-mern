import React, { useState ,useEffect} from 'react'
import "./ChatScreen.css"
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core';
import db from './firebase';
import Message from './Message';
function ChatScreen() {
    const [input,setInput]=useState();
    const[messages,setMessages]=useState([]);
    const[username,setUsername]=useState();

    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection("chats").add({
            message:input,
    
        })
        setInput("")

    }

    useEffect(()=>{

        db.collection("chats").onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
        })
    },[])
    return (
        <div className="chatscreen">
            {
                messages.map(({message,id})=>(
                    <Message message={message} id={id} username={username} />
                ))
            }
            <form className="chatscreen__form" autoComplete="off">
            <TextField className="chatscreen__input" id="standard-basic" label="Enter the Message"
            value={input}
            onChange={e=>setInput(e.target.value)}
            
            />
            <Button type="submit" onClick={sendMessage}>Send</Button>
            </form>
          
            
        </div>
    )
}

export default ChatScreen
