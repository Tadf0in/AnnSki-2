import React from 'react'

export default function Event({ event }) {
  const formatDate = (date) => {
    let format = new Date(date)
    return ("0" + format.getDate()).slice(-2) + '/' + ("0" + (format.getMonth() + 1)).slice(-2)

  }

  return (
    <div className="event card">
      <img className="card-img-top object-fit-cover" alt="station" height="200px"
        src={event.background_img}
      />
      
      <div className='card-header d-flex justify-content-between align-items-end'>
        <div className='event-left d-flex flex-column justify-content-end'>
          <h5 className="card-title fw-bold fs-1">{event.location}</h5>
          <h5 className='card-title fs-3'>{formatDate(event.date)}</h5>
        </div>

        <div className='event-right'>
          <img className='logo' alt='logo'
            src={event.logo_img}
          />
        </div>
      </div>

      <div className="card-body">
        <p className="card-text">{event.desc}</p>

        <div>
          <span className='fw-bold fs-3'>{event.prixA}€</span> 
          <br/>
          <span className='fw-light fst-italic text-body-secondary'>({event.prixNA}€ pour les non adhérents)</span>
        </div>

        <br />

        <span className='event-footer d-flex align-items-center'>
          { event.can_register 
          ? <button className="btn btn-primary">S'inscrire</button> 
          : <button disabled className='btn btn-secondary'><i class="fa-solid fa-lock"></i>&nbsp;&nbsp;S'inscrire</button>
          }
          <p className='card-text text-body-secondary'>Reste {event.nb_max - event.inscrits.length}/{event.nb_max} places</p>
        </span>
      </div>
    </div>
  )
}
