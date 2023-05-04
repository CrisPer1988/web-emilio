import React from 'react'
import ReactPlayer from "react-player"

const SeccionVideos = () => {
  return (
    <div className='content__videos'>
        <div className='video__autos'>
            <div>
            <h3>Nuevo C3 Aircross</h3>
        <ReactPlayer
                width='100%'
                height="auto"
                controls
                  url="/images/c3-aircross.mp4"
                />
            </div>
           <div>
           <h3>Nuevo C3</h3>
        <ReactPlayer className= "react-player"
                width='100%'
                height="auto"
                controls                
                  url="/images/c3-video.mp4"
                />
           </div>
        
        </div>
        
                <div>
  <ReactPlayer
                width='100%'
                height="100vh"
                controls
                // max-height='90vh'
                  url="/images/video-emilio.mp4"
                />
  </div>
    </div>
  )
}

export default SeccionVideos