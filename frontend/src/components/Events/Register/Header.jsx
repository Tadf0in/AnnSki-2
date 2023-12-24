import React from 'react'

export default function Header({ data }) {
  return <> 
        <div className='register-header d-flex justify-content-center'>
            <div className='register-header-infos d-flex justify-content-between align-items-end'>
                <div className='event-left d-flex flex-column justify-content-end'>
                    <h5 className="card-title fw-bold fs-1">{data.lieu}</h5>
                    <h5 className='card-title fs-3'>{data.date}</h5>
                </div>

                <div className='event-right'>
                    <img className='logo' alt='logo'
                        src={data.logo_img}
                    />
                </div>
            </div>
        </div>

        <img className="card-img-top object-fit-cover" alt="station" height="200px"
            src={data.background_img}
        />
    </>
}