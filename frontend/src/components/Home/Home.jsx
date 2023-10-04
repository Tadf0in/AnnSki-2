import React, { useEffect, useState } from 'react'
import trailer from '../../assets/trailer.mp4'
import Events from '../Events/Events'

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(76)
  useEffect(() => {
    setNavbarHeight(document.getElementById('navbar').clientHeight)
  }, [])

  return (
    <>
      <div className='trailer' style={{height: "calc(100vh - " + navbarHeight + "px)"}}>
        <video playsInline autoPlay muted loop controls={false}>
          <source src={trailer} type='video/mp4'/>
        </video>
      </div>

      <div id="events">
        <Events />
      </div>
    </>
  )
}

