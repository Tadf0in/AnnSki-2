import React, { useState } from 'react'
import FormFloating from '../../../utils/Fields'
import { FormSelect } from '../../../utils/Fields'
import useFetch from '../../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function Form() {
  const {event_id} = useParams()
  const [formData, setFormData] = useState({
    adherent: "",
    nom: "",
    prenom: "",
    mail: "",
    tel: "",
    ecole: "",
    bus: "",
  })

  const submitForm = (e) => {
    e.preventDefault()
    console.log(formData)
    fetch('http://localhost:8000/api/events/register/'+event_id, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json; charset=UTF-8" 
      },
      body: JSON.stringify(formData)
    })
    .then(res => console.log(res))
  }

  return <form className='register-form' onSubmit={e => submitForm(e)}>
      <FormSelect key="form-select-register-adherent" name="adherent" placeholder="Adhérent ?" 
      get={formData} set={setFormData} options={[
        ["false", "Non adhérent"], 
        ["true", "Adhérent"]
      ]}/>

      <FormFloating type="text" name="nom" id="formFLoating-register-nom" placeholder="Nom" get={formData} set={setFormData}/>
      <FormFloating type="text" name="prenom" id="formFLoating-register-prenom" placeholder="Prénom" get={formData} set={setFormData}/>
      <FormFloating type="mail" name="mail" id="formFLoating-register-mail" placeholder="Adresse mail" get={formData} set={setFormData}/>
      <FormFloating type="tel" name="tel" id="formFLoating-register-tel" placeholder="Numéro de téléphone" get={formData} set={setFormData}/>

      <FormSelect key="form-select-register-ecole" name="ecole" placeholder="École" 
      get={formData} set={setFormData} options={[
        ["Polytech", "Polytech"],
        ["IUT", "IUT"],
        ["IAE", "IAE"],
        ["exte", "Exté"],
      ]}/>

      <FormSelect key="form-select-register-bus" name="bus" placeholder="Bus"
      get={formData} set={setFormData} options={[
        ["a/r", "Aller / Retour"],
        ["aller", "Bus uniquement à l'aller"],
        ["retour", "Bus uniquement au retour"],
        ["aucun", "Je ne prends pas le bus"],
      ]}
      
      />

      <button type='submit' className='btn btn-primary form-submit'>S'inscrire</button>
    </form>
}