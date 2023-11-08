import React from 'react'
import style from './Error.module.css'
function Error(props) {
    const {message} = props
  return (
    <div className={style.errorWrapper}>{message}</div>
  )
}

export default Error