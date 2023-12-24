import useFetch from '../../hooks/useFetch'
import Event from './Event'
import Loading from '../../utils/Loading'

export default function Events() {
  const {loading, data} = useFetch('/api/events', {method: 'GET'})
 
  return <>
    {loading && <Loading />}

    {data ? 
    <div className='events d-flex flex-column align-items-center'>

      <h1 className='section-title fs-1'>Sorties à venir</h1>
      <div className='list-events d-flex flex-column align-items-center'>
        {
          data.filter(e => new Date(e.date) >= new Date()).map((event, id) => (
              <Event event={event} key={id} />
            ))
          }
      </div>

      <h1 className='section-title fs-1 passees'>Sorties passées</h1>
      <div className='list-events d-flex flex-column align-items-center nb'>
        {
          data.filter(e => new Date(e.date) < new Date()).map((event, id) => (
              <Event event={event} key={id} />
            ))
          }
      </div>
    </div>
    : <span className='fst-italic text-body-secondary d-flex justify-content-center'>Aucune sortie</span>}
  </>
}