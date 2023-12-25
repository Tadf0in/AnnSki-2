import React from 'react'


export default function FormFloating({ type, name, get, set, id, placeholder }) {
  return (
    <div className="form-floating mb-3">
        <input type={type} className="form-control" id={"floating"+id} placeholder={placeholder} required
        value={get[[name]]}
        onChange={e => set({...get, [name]: e.target.value})}/>
        <label htmlFor={"floating"+id}>{placeholder}</label>
    </div>
  )
}


export function FormSelect({ name, placeholder, get, set, options }) {
  return <select className='form-select mb-3' name={name} defaultValue="" required
  value={get[[name]]}
  onChange={e => set({...get, [name]: e.target.value})}>
    <option key={"select-"+name+"-default"} disabled value="">{placeholder}</option>
    { options.map((o, i) => 
      <option key={"select-"+name+"-"+i} value={o[0]}>{o[1]}</option>
    )}
  </select>
}