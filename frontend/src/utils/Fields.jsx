import React from 'react'

export default function FormFloating({ type, id, placeholder }) {
  return (
    <div className="form-floating mb-3">
        <input type={type} className="form-control" id={"floating"+id} placeholder={placeholder} required/>
        <label htmlFor={"floating"+id}>{placeholder}</label>
    </div>
  )
}

export function FormSelect({ name, placeholder, get, set, options }) {
  return <select className='form-select mb-3' name={name} value={get[[name]]} defaultValue="" required
  onChange={e => set({get, [name]: e.target.value})}>
    <option disabled value="">{placeholder}</option>
    { options.map((o, i) => {
      return <>
      <option key={"select-"+name+"-"+i} value={o[0]}>{o[1]}</option>
      </>
    })}
  </select>
}