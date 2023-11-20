import React from 'react'
import Question from './Question'
import './Questions.css'
import { FaQuestionCircle } from "react-icons/fa";

export default function Questions() {
  return (
    <div>
      <div>
        <h3>45th BCS (Preli)</h3>
        <div className='Qname'>
          <h6>General</h6>
          <h6>19 May 2023</h6>
          <h6>Marks 200</h6>
        </div>
      </div>
      <Question />
      <FaQuestionCircle />
      <i class="fa-solid fa-question"></i>
    </div>
  )
}
