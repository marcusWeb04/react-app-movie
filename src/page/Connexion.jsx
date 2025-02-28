import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'
import _Nav from '/src/component/_Nav.jsx'
import _form_connexion from '../component/new-form/_form-connexion'

function Connexion() {
  return (
    <>
      <_Nav />
      <_form_connexion />
    </>
  )
}

export default Connexion
