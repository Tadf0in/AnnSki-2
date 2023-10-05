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
      <div className='absolute home' style={{height: "calc(100vh - " + navbarHeight + "px)", paddingTop: navbarHeight}}>
        <h1 className='fs-1 fw-bold'>REJOIGNEZ NOUS SUR LES PISTES</h1>
        <br/>
        <a href="#events" className='btn btn-primary'>Accèder à la prochaine sortie</a>
      </div>
      
      <div className='trailer z-n1 d-flex justify-content-center' style={{height: "calc(100vh - " + navbarHeight + "px)"}}>
        <video className='object-fit-cover' playsInline autoPlay muted loop controls={false}>
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

