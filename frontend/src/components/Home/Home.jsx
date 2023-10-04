import React, { useEffect, useState } from 'react'
import trailer from '../../assets/trailer.mp4'

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(76)
  useEffect(() => {
    setNavbarHeight(document.getElementById('navbar').clientHeight)
  }, [])

  return (
    <>
      <div className='trailer' style={{height: "calc(100% - " + navbarHeight + "px)", marginTop: navbarHeight}}>
        <video playsInline autoPlay muted loop controls={false}>
          <source src={trailer} type='video/mp4'/>
        </video>
      </div>
    </>
  )
}

