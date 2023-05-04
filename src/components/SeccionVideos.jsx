import React from 'react'
import ReactPlayer from "react-player"

const SeccionVideos = () => {
  return (
    <div className='content__videos'>
        <ReactPlayer className= "react-player"
                width='100%'
                controls
                
                max-height='90vh'
                  url="https://www.youtube.com/watch?v=wQzFlT1Kmtc"
                />
    </div>
  )
}

export default SeccionVideos