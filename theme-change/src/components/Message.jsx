function Message({theme}){
    return <div className={`msg-${theme}`}>I am in {theme} mode</div>
}

export default Message;