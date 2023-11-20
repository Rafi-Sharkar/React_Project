import React from 'react'
import Question from './Question'
import './Questions.css'

export default function Questions() {
  return (
    <div>
      <div className='Qtitle'>
        <p>44th BCS (Preli)</p>
        <div className='Qname'>
          <p>General</p>
          <p>19 May 2023</p>
          <p>Marks 200</p>
        </div>
      </div>
      <h3>কোড : 1 কোড ; হেমন্ত</h3>
      <Question />
    </div>
  )
}
