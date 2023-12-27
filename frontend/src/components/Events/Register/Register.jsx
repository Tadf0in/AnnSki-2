import React from 'react'
import { useParams } from "react-router-dom"
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../utils/Loading'
import Header from './Header'
import Form from './Form'


export default function Register () {
    const {event_id} = useParams()
    const {loading, data, errors} = useFetch('/api/events/'+event_id, {method: 'GET'})

    if (errors) {
        throw new Error("Cette sortie ne semble pas exister")
    } else 
    if (data && !data.can_register) {
        throw new Error("Impossible de s'inscrire à cette sortie")
    }

    return <>
        {loading && <Loading />}

        { data && data.can_register && 
        <div className='register d-flex flex-column align-items-center'>
            <Header data={data} />
            <Form />
        </div>
        }
    </>
}