import React, { useEffect, useState } from 'react'
import { client } from '../../main'
import Event from './Event'

export default function Events() {
  const [listEvents, setListEvents] = useState([])

  useEffect(() => {
    const getEventsApi = async () => {
        await client.get('/api/events/')
        .then((res) => {
            setListEvents(res.data)
        }) 
        .catch(err => console.log(err))
    }
    getEventsApi()
  }, [])

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