import React,{useState} from 'react'

function Alerts(props) {
    const capt=(word)=>{
     let lowType=word.toLowerCase()
     return lowType.charAt(0).toUpperCase()+lowType.slice(1)  
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capt(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alerts