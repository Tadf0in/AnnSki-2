import React, { useState } from 'react'
import FormFloating from '../../../utils/Fields'
import { FormSelect } from '../../../utils/Fields'

export default function Form() {
  const [formData, setFormData] = useState({
    adherent: "",
    nom: "",
    prenom: "",
    mail: "",
    tel: "",
    ecole: "",
  })

  return <form className='register-form'>
      <FormSelect name="adherent" placeholder="Adhérent ?" get={formData} set={setFormData} options={[
        ["false", "Non adhérent"], 
        ["true", "Adhérent"]
      ]}/>

      <FormFloating type="text" id="lastName" placeholder="Nom" />
      <FormFloating type="text" id="firstName" placeholder="Prénom" />
      <FormFloating type="mail" id="mail" placeholder="Adresse mail" />
      <FormFloating type="tel" id="tel" placeholder="Numéro de téléphone" />

      <FormSelect name="ecole" placeholder="École" get={formData} set={setFormData} options={[
        ["Polytech", "Polytech"],
        ["IUT", "IUT"],
        ["IAE", "IAE"],
        ["exte", "Exté"],
      ]}/>

      <button type='submit' className='btn btn-primary form-submit'>S'inscrire</button>
    </form>
}