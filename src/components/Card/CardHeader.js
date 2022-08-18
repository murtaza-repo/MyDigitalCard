import React from 'react'
import mypic from '../../image/mypic.png'

export function CardHeader() {
  return (
    <div className='card-header'>
        <img src={mypic} alt='mypic' />
    </div>
  )
}
