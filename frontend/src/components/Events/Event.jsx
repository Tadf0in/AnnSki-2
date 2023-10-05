import React from 'react'

export default function Event({ event }) {
  return (
    <div className="event card">
      <img className="card-img-top object-fit-cover" alt="station" height="200px"
        src="https://images.france.fr/zeaejvyq9bhj/26QptgfWZ0FinE9mOWGmB1/9b72782e89d1d2284421497ef7feaec3/TIGNES___B__atrice_Pr__ve_-_AdobeStock.jpg"
      />
      
      <div className='card-header d-flex justify-content-between align-items-end'>
        <div className='event-left d-flex flex-column justify-content-end'>
          <h5 className="card-title fw-bold fs-1">{event.title}</h5>
          <h5 className='card-title fs-3'>{event.date}</h5>
        </div>

        <div className='event-right'>
          <img className='logo' alt='logo'
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/ce/Logo_Tignes.svg/2048px-Logo_Tignes.svg.png"
          />
        </div>
      </div>

      <div className="card-body">
        <p className="card-text">{event.desc}</p>

        <span className='event-footer d-flex align-items-center'>
          <a href="#" className="btn btn-primary">S'inscrire</a>
          <p className='card-text text-body-secondary'>Reste {event.nb_max - event.inscrits.length}/{event.nb_max} places</p>
        </span>
      </div>
    </div>
  )
}
