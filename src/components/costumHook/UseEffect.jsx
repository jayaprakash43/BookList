import React from 'react'
import CustomEffect from './CustomEffect'
// name,image,company,bio

const TAskUseEffect = () => {
  const { load, setlaoding } = CustomEffect([])

  return (
    <div>
      <center>

        <img src={load.avatar_url} alt="" />
        <h1>{load.name} </h1>
        <p><b>{load.company}</b></p>
        <p>{load.bio} </p>
      </center>
    </div>
  )
}

export default TAskUseEffect
