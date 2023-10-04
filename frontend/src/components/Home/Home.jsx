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
      <div className='absolute home' style={{marginTop: "calc(0.4*(100vh - " + navbarHeight + "px))"}}>
        <h1>REJOIGNEZ NOUS SUR LES PISTES</h1>
        <br/>
        <a href="#events" className='btn btn-primary'>Accèder à la prochaine sortie</a>
      </div>
      
      <div className='trailer' style={{height: "calc(100vh - " + navbarHeight + "px)"}}>
        <video playsInline autoPlay muted loop controls={false}>
          <source src={trailer} type='video/mp4'/>
        </video>
      </div>

      <div id="events">
        <h1>Prochaine sortie</h1>
        <Events />
      </div>
    </>
  )
}

