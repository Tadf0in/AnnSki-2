import React from 'react'

export default function Event({ event }) {
  return (
    <div className="event card">
      <img className="card-img-top" alt="tignes"
        src="https://images.france.fr/zeaejvyq9bhj/26QptgfWZ0FinE9mOWGmB1/9b72782e89d1d2284421497ef7feaec3/TIGNES___B__atrice_Pr__ve_-_AdobeStock.jpg"
      />
      <div className="card-body">
        <img className='logo' alt='logo'
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/ce/Logo_Tignes.svg/2048px-Logo_Tignes.svg.png"
        />
        <h5 className="card-title">{event.title}</h5>
        <h5 className='card-title'>{event.date}</h5>
        <p className="card-text">{event.desc}</p>
        <a href="#" className="btn btn-primary">S'inscrire</a>
      </div>
    </div>
  )
}