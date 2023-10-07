import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import trailer from '../../assets/trailer.mp4'
import Event from '../Events/Event'
import Loading from '../../utils/Loading'

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(76)
  useEffect(() => {
    setNavbarHeight(document.getElementById('navbar').clientHeight)
  }, [])
  const {loading, data} = useFetch('/api/events/0', {method: 'GET'})


  return (
    <>
      <div className='absolute home' style={{height: "calc(100vh - " + navbarHeight + "px)"}}>
        <h1 className='fs-1 fw-bold'>REJOIGNEZ NOUS SUR LES PISTES</h1>
        <br/>
        <a href="#next" className='btn btn-primary'>Accèder à la prochaine sortie</a>
      </div>
      
      <div className='trailer z-n1 d-flex justify-content-center' style={{height: "calc(100vh - " + navbarHeight + "px)"}}>
        <video className='object-fit-cover' playsInline autoPlay muted loop controls={false}>
          <source src={trailer} type='video/mp4'/>
        </video>
      </div>

      <section id="next" className='d-flex flex-column align-items-center'>
        <h1 className='section-title fs-1'>Prochaine sortie</h1>
          {loading && <Loading />}
          {data && <div className='next-event d-flex justify-content-center'> 
            <Event event={data}/>
          </div>}
      </section>
    </>
  )
}

