import React, {useState, useEffect, useRef} from 'react'

// useRef is same as useState but it doesn't re-render the component when the value changes

const VideoChat=()=>{
    const localVideoRef=useRef(null);
    const remoteVideoRef=useRef(null);
    
    return (
        <div>
            <h1>Video Chat</h1>
            <video ref={localVideoRef} autoPlay muted/>
            <video ref={remoteVideoRef} autoPlay muted/>
          
        </div>
    )
}

export default VideoChat
