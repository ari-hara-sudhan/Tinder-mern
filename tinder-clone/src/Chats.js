import React from 'react'
import Chat from './Chat'
import "./Chats.css"

function Chats() {
    return (
        <div >
            <Chat
            name="elon musk"
            profile="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=236&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            timestamp="40 sec ago.."
            message="Hello march"
            />
              <Chat
            name="jeff Bezos"
            profile="https://www.bing.com/th?id=OIP.tbpXqHDVgn-dd5eQ6WVLuQHaE7&w=197&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            timestamp="10 sec ago.."
            message="hello world"
            />
              <Chat
            name="Bill gates"
            profile="https://www.bing.com/th?id=OIP.vjtmohsJIkrV6INkrGk_YAHaKe&w=96&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            timestamp="30 sec ago.."
            message="what up guys.."
            />
        </div>
    )
}

export default Chats
