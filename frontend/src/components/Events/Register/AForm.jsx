import React from 'react'
import FormFloating from '../../Utils/Fields'

export default function AForm() {
  return <form className='register-form'>
        <FormFloating type="mail" id="Mail" placeholder="Adresse mail" />
        <FormFloating type="password" id="Password" placeholder="Mot de passe" />
    </form>
}