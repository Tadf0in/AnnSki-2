import React from 'react'

export default function FormFloating({ type, id, placeholder }) {
  return (
    <div className="form-floating mb-3">
        <input type={type}className="form-control" id={"floating"+id} placeholder={placeholder}/>
        <label htmlFor={"floating"+id}>{placeholder}</label>
    </div>
  )
}