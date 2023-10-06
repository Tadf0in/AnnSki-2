import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Event from './Event'

export default function Events() {
  const {loading, data} = useFetch('/api/events', {method: 'GET'})
 
  return <>
    {loading && 'Loading...'}

    {data && <div className='events'>
      <h1>Sorties</h1>
      <div className='list-events d-flex flex-column align-items-center'>
        {
          data.map((event, id) => (
            <Event event={event} key={id} />
            ))
          }
      </div>
    </div>
    }
  </>
}