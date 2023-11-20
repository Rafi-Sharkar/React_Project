import React from 'react'
import Questions from './Questions'
import './QuizPage.css'

export default function QuizPage() {
  return (
    <div className='body'>
      <div className='Qtitle'>
        <p>44th BCS (Preli)</p>
        <div className='Qname'>
          <p>General</p>
          <p>19 May 2023</p>
          <p>Marks 200</p>
        </div>
      </div>
        <Questions />
    </div>
  )
}
