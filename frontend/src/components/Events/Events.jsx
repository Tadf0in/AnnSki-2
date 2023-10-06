import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Event from './Event'

export default function Events() {
  const [listEvents, setListEvents] = useState([])

  useFetch('GET', '/api/events/', setListEvents)

  if (listEvents.length === 0) {
    return (<>Loading...</>)
  }
  return (
    <>
    <h1>Sorties</h1>
    <div className='list-events d-flex flex-column align-items-center'>
      {
        listEvents.map((event, id) => (
          <Event event={event} key={id} />
        ))
      }
    </div>
    </>
  )
}