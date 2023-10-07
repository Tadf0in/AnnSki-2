import React from 'react'
import FormFloating from '../../Utils/Fields'

export default function NAForm() {
  return <form className='register-form'>
        <FormFloating type="text" id="Name" placeholder="Nom" />
        <FormFloating type="text" id="Firstname" placeholder="Prénom" />
        <FormFloating type="mail" id="Mail" placeholder="Adresse mail" />
        <FormFloating type="tel" id="Tel" placeholder="Numéro de téléphone" />
        <button type='submit' className='btn btn-primary'>S'inscrire</button>
    </form>
}