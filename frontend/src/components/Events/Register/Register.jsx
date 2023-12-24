import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../utils/Loading'
import NAForm from './NAForm'
import Header from './Header'
import AForm from './AForm'

export default function Register () {
    const {event_id} = useParams()
    const {loading, data, errors} = useFetch('/api/events/'+event_id, {method: 'GET'})
    const [adherent, setAdherent] = useState(null)

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

            { adherent === null ? 
                <div className='btns-adherent d-grid gap-3 mx-auto mt-5'>
                    <button className='btn btn-adherent btn-primary' onClick={() => setAdherent(true)}>Adhérent ({data.prixA}€)</button>
                    <button className='btn btn-adherent btn-secondary' onClick={() => setAdherent(false)}>Non Adhérent ({data.prixNA}€)</button>
                </div>

                : adherent ? <AForm /> : <NAForm />
            }
        </div>
        }
    </>
}