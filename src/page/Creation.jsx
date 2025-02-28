import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'
import _Nav from '/src/component/_Nav.jsx'
import _form_creation from '../component/new-form/_form-creation'

function Creation() {
  return (
    <>
      <_Nav />
      <_form_creation />
    </>
  )
}

export default Creation
