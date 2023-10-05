import React, { useEffect, useState } from 'react'
import Event from './Event'

export default function Events() {
  const [listEvents, setListEvents] = useState([])

  useEffect(() => {
    let temp = [
      {
        'id': 1,
        'title': 'Sortie test',
        'location': 'Station de ski test',
        'desc': 'Lorem ipsum dolor sin at met blablabla mes couilles sur un tapis bibidibobidibou',
        'date': '07/10/2023',
        'prixA': '26',
        'prixNA': '35',
        'inscrits': [],
        'nb_max': 60,
      },
      {
        'id': 2,
        'title': 'Sortie test 2',
        'location': 'Station de ski test 2',
        'desc': 'Lorem ipsum dolor sin at met blablabla mes couilles sur un tapis bibidibobidibou',
        'date': '08/11/2023',
        'prixA': '26',
        'prixNA': '35',
        'inscrits': [],
        'nb_max': 60,
      }
    ]
    return (
      setListEvents(temp)
    )
  }, [])

  if (listEvents.length === 0) {
    return (<>Loading...</>)
  }
  return (
    <>
    <h1>Sorties</h1>
    <div className='list-events'>
      {
        listEvents.map((event, id) => (
          <Event event={event} key={id} />
        ))
      }
    </div>
    </>
  )
}