import React from 'react'
import styles from './QuizPage.module.css'
import Selector from './QComponents/QJs/Selector'
import Quizdata from "./Quizdata"
export default function QuizPage() {
  return (
    <div className={styles.quizpage_main}>
      <h2 className={styles.heading}>
          Quesition
      </h2>
      <div className={styles.question_con}>
        {Quizdata.map((item,index)=>
        <div key={index} className={styles.question_bank}>
          <Selector data={item} />
        </div>)}
        
      </div>
     
    </div>
  )
}
